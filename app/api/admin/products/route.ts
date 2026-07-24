import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET: Fetch all products from Neon PostgreSQL
export async function GET() {
  try {
    const { rows } = await pool.query(
      `SELECT p.*, c.name as category_name 
       FROM public.products p 
       LEFT JOIN public.categories c ON p.category_id = c.id 
       ORDER BY p.created_at DESC`
    );
    return NextResponse.json({ success: true, products: rows });
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Create a new product in Neon PostgreSQL
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      slug,
      sku,
      short_description,
      description,
      price_pkr,
      compare_at_price_pkr,
      stock_quantity,
      tags,
      specifications,
      cover_image_url,
      is_active,
      is_featured
    } = body;

    const formattedSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const tagsArray = Array.isArray(tags) ? tags : (tags ? tags.split(',').map((t: string) => t.trim()) : []);
    const specsJson = typeof specifications === 'string' ? JSON.parse(specifications) : (specifications || {});

    const query = `
      INSERT INTO public.products (
        name, slug, sku, short_description, description, price_pkr, 
        compare_at_price_pkr, stock_quantity, tags, specifications, 
        cover_image_url, is_active, is_featured
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *;
    `;

    const values = [
      name,
      formattedSlug,
      sku || `aa-${Math.floor(Math.random() * 10000)}`,
      short_description || '',
      description || '',
      parseInt(price_pkr, 10) || 0,
      compare_at_price_pkr ? parseInt(compare_at_price_pkr, 10) : null,
      parseInt(stock_quantity, 10) || 0,
      tagsArray,
      JSON.stringify(specsJson),
      cover_image_url || '',
      is_active !== undefined ? is_active : true,
      is_featured !== undefined ? is_featured : false
    ];

    const { rows } = await pool.query(query, values);
    return NextResponse.json({ success: true, product: rows[0] });
  } catch (error: any) {
    console.error('Error creating product:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PUT: Update an existing product
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const {
      id,
      name,
      slug,
      sku,
      short_description,
      description,
      price_pkr,
      compare_at_price_pkr,
      stock_quantity,
      tags,
      specifications,
      cover_image_url,
      is_active,
      is_featured
    } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'Product ID is required' }, { status: 400 });
    }

    const tagsArray = Array.isArray(tags) ? tags : (tags ? tags.split(',').map((t: string) => t.trim()) : []);
    const specsJson = typeof specifications === 'string' ? JSON.parse(specifications) : (specifications || {});

    const query = `
      UPDATE public.products SET
        name = $1,
        slug = $2,
        sku = $3,
        short_description = $4,
        description = $5,
        price_pkr = $6,
        compare_at_price_pkr = $7,
        stock_quantity = $8,
        tags = $9,
        specifications = $10,
        cover_image_url = $11,
        is_active = $12,
        is_featured = $13,
        updated_at = NOW()
      WHERE id = $14
      RETURNING *;
    `;

    const values = [
      name,
      slug,
      sku,
      short_description,
      description,
      parseInt(price_pkr, 10) || 0,
      compare_at_price_pkr ? parseInt(compare_at_price_pkr, 10) : null,
      parseInt(stock_quantity, 10) || 0,
      tagsArray,
      JSON.stringify(specsJson),
      cover_image_url,
      is_active,
      is_featured,
      id
    ];

    const { rows } = await pool.query(query, values);
    return NextResponse.json({ success: true, product: rows[0] });
  } catch (error: any) {
    console.error('Error updating product:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE: Remove a product from database
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Product ID is required' }, { status: 400 });
    }

    await pool.query('DELETE FROM public.products WHERE id = $1', [id]);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
