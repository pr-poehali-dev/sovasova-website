import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('catalog');

  const products = [
    {
      id: 1,
      name: 'Омега-3 Премиум',
      price: '1,299 ₽',
      image: '/img/409234d0-b83b-4fc1-ba81-6e80a83f99be.jpg',
      description: 'Высококачественные жирные кислоты для здоровья сердца'
    },
    {
      id: 2,
      name: 'Витамин D3',
      price: '899 ₽',
      image: '/img/ec8b18da-944d-4870-8c01-73eb43ec34cc.jpg',
      description: 'Поддержка иммунитета и здоровья костей'
    },
    {
      id: 3,
      name: 'Магний В6',
      price: '749 ₽',
      image: '/img/409234d0-b83b-4fc1-ba81-6e80a83f99be.jpg',
      description: 'Для нервной системы и мышечной активности'
    },
    {
      id: 4,
      name: 'Комплекс витаминов',
      price: '1,599 ₽',
      image: '/img/ec8b18da-944d-4870-8c01-73eb43ec34cc.jpg',
      description: 'Полный комплекс витаминов и минералов'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === 'catalog' && (
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
                Каталог БАДов
              </h1>
              <p className="text-lg text-muted-foreground font-body">
                Премиальные пищевые добавки для вашего здоровья
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground font-body mb-4">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-bold text-primary">
                        {product.price}
                      </span>
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
                О компании СоваСова
              </h1>
              <p className="text-lg text-muted-foreground font-body">
                Мы создаем качественные пищевые добавки для вашего здоровья
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  Наша миссия
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Компания СоваСова специализируется на производстве высококачественных 
                  биологически активных добавок. Мы используем только проверенные ингредиенты 
                  и современные технологии производства для создания эффективных продуктов.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  Качество и безопасность
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading font-medium mb-2">Сертификация</h3>
                    <p className="text-muted-foreground font-body">
                      Все наши продукты проходят строгий контроль качества и 
                      имеют необходимые сертификаты соответствия.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-medium mb-2">Натуральность</h3>
                    <p className="text-muted-foreground font-body">
                      Мы используем только натуральные компоненты без 
                      искусственных добавок и консервантов.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-heading font-semibold mb-6">
                  Полезные материалы
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <a 
                    href="https://youtube.com/watch?v=example1" 
                    className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Icon name="Play" size={20} className="mr-3 text-primary" />
                    <div>
                      <h4 className="font-heading font-medium">Как выбрать БАДы</h4>
                      <p className="text-sm text-muted-foreground">Видео-гид</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://youtube.com/watch?v=example2" 
                    className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Icon name="Play" size={20} className="mr-3 text-primary" />
                    <div>
                      <h4 className="font-heading font-medium">Польза Омега-3</h4>
                      <p className="text-sm text-muted-foreground">Научные факты</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://youtube.com/watch?v=example3" 
                    className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Icon name="Play" size={20} className="mr-3 text-primary" />
                    <div>
                      <h4 className="font-heading font-medium">Производство БАДов</h4>
                      <p className="text-sm text-muted-foreground">Экскурсия по заводу</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://youtube.com/watch?v=example4" 
                    className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Icon name="Play" size={20} className="mr-3 text-primary" />
                    <div>
                      <h4 className="font-heading font-medium">Витамины зимой</h4>
                      <p className="text-sm text-muted-foreground">Советы врача</p>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-sidebar border-l border-sidebar-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-center">
            <img 
              src="/img/5f88b4ee-a305-4896-834e-d0f57f9e361e.jpg" 
              alt="СоваСова"
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="p-6">
          <div className="space-y-2">
            <Button 
              variant={activeTab === 'catalog' ? 'default' : 'ghost'}
              className="w-full justify-start font-body"
              onClick={() => setActiveTab('catalog')}
            >
              <Icon name="Store" size={18} className="mr-3" />
              Каталог
            </Button>
            
            <Button 
              variant={activeTab === 'about' ? 'default' : 'ghost'}
              className="w-full justify-start font-body"
              onClick={() => setActiveTab('about')}
            >
              <Icon name="Info" size={18} className="mr-3" />
              О нас
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-auto p-6 border-t border-sidebar-border">
          <div className="text-center">
            <h3 className="font-heading font-semibold text-sidebar-foreground mb-2">
              Связаться с нами
            </h3>
            <div className="space-y-2 text-sm text-sidebar-foreground/70">
              <div className="flex items-center justify-center">
                <Icon name="Phone" size={14} className="mr-2" />
                +7 (800) 123-45-67
              </div>
              <div className="flex items-center justify-center">
                <Icon name="Mail" size={14} className="mr-2" />
                info@sovasova.ru
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;