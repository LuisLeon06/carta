import React, { useState, useEffect } from 'react'
import SplashScreen from './screens/SplashScreen'
import CategoryList from './screens/CategoryList'
import MenuList from './screens/MenuList'
import ProductDetail from './screens/ProductDetail'
import { fetchMenu } from './api/menuData'
import EmberParticles from './components/EmberParticles'

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ── Cart state ─────────────────────────────────────
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };
  // ───────────────────────────────────────────────────

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchMenu();
      setMenuItems(data.menuItems);
      setCategories(data.categories);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const handleStart = () => { if (!isLoading) setCurrentScreen('categories'); };
  const handleSelectCategory = (cat) => { setSelectedCategory(cat); setCurrentScreen('list'); };
  const handleSelectProduct = (prod) => { setSelectedProduct(prod); setCurrentScreen('detail'); };
  const handleBackToCategories = () => { setSelectedCategory(null); setCurrentScreen('categories'); };
  const handleBackToList = () => { setSelectedProduct(null); setCurrentScreen('list'); };

  return (
    <div className="w-full h-full text-white bg-transparent selection:bg-[var(--color-primary-cyan)]/30">
      {/* Ember/ash particles — global */}
      <EmberParticles count={50} />

      {currentScreen === 'splash' && (
        <SplashScreen onStart={handleStart} />
      )}

      {currentScreen === 'categories' && (
        <CategoryList
          categories={categories}
          onSelectCategory={handleSelectCategory}
          cartCount={cartCount}
        />
      )}

      {currentScreen === 'list' && selectedCategory && (
        <MenuList
          category={selectedCategory}
          items={menuItems}
          onSelectProduct={handleSelectProduct}
          onBack={handleBackToCategories}
          cartCount={cartCount}
        />
      )}

      {currentScreen === 'detail' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onBack={handleBackToList}
          onAddToCart={handleAddToCart}
          cartCount={cartCount}
        />
      )}
    </div>
  )
}

export default App
