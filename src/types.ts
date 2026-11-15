export type Currency = 'BDT';

export interface Product {
  id: string;
  name: string;
  nameBn: string;
  category: string;
  categoryBn: string;
  subcategory?: string;
  price: number;            // current price in BDT
  originalPrice?: number;   // strikethrough price if discounted
  weight: string;           // e.g. "১ কেজি", "৫০০ গ্রাম", "১ লিটার"
  weightKg: number;         // numeric kg for sorting/filter
  image: string;
  images?: string[];        // gallery
  badge?: 'হট ডিল' | 'নতুন' | 'সীমিত স্টক' | 'বেস্ট সেলার';
  rating: number;
  reviewCount: number;
  inStock: boolean;
  description: string;
  descriptionBn?: string;
  tags?: string[];
  createdAt: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: string;
}

export interface CartState {
  items: CartItem[];
  couponCode?: string;
  discountPercent?: number;
  deliveryCharge: number;
}

export interface Order {
  id: string;
  userId: string;
  items: { productId: string; name: string; price: number; quantity: number; weight: string }[];
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  total: number;
  paymentMethod: 'cash_on_delivery' | 'bkash' | 'nagad' | 'card';
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  statusBn: string;
  address: string;
  phone: string;
  customerName: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  nameBn?: string;
  email: string;
  phone: string;
  address?: string;
  avatar?: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  nameBn: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sortBy: 'featured' | 'price_asc' | 'price_desc' | 'rating' | 'newest';
}

export interface Testimonial {
  id: string;
  name: string;
  nameBn?: string;
  location?: string;
  rating: number;
  text: string;
  textBn?: string;
  avatar: string;
}

export interface AnalyticsMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface WishlistState {
  productIds: string[];
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export type View = 'home' | 'shop' | 'categories' | 'orders' | 'wishlist' | 'profile';