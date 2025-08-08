import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "../components/Helmet";

export default function Home() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Иновативен дизайн",
      description: "Модерни и елегантни решения за осветление"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Енергийна ефективност",
      description: "LED технология за максимална икономия"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Гарантирано качество",
      description: "Премиум материали и дълголетие"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Luxury Lighting - Луксозно осветление</title>
        <meta name="description" content="Луксозно осветление за дома и бизнеса. Модерни и елегантни решения за осветление, LED технологии, премиум качество и иновации." />
      </Helmet>
      <div className="space-y-16">
      {/* Hero Section with Beautiful Images */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
        
        {/* Hero Images Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className="col-span-3 space-y-4">
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=300&fit=crop&crop=center')`
              }}></div>
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center')`
              }}></div>
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center')`
              }}></div>
            </div>
            <div className="col-span-3 space-y-4 mt-8">
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center')`
              }}></div>
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&crop=center')`
              }}></div>
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center')`
              }}></div>
            </div>
            <div className="col-span-3 space-y-4">
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop&crop=center')`
              }}></div>
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop&crop=center')`
              }}></div>
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1524133484654-53bb6b751b3a?w=400&h=300&fit=crop&crop=center')`
              }}></div>
            </div>
            <div className="col-span-3 space-y-4 mt-8">
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=400&h=300&fit=crop&crop=center')`
              }}></div>
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1520637836862-4d197d17c88a?w=400&h=300&fit=crop&crop=center')`
              }}></div>
              <div className="h-1/3 bg-cover bg-center rounded-lg" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop&crop=center')`
              }}></div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
              <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-blue-200 font-medium">Луксозно осветление от 2008</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Luxury Lighting
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Превърнете всяко пространство в произведение на изкуството с нашите 
            <span className="text-white font-semibold"> изключителни осветителни решения</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/catalog"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 inline-flex items-center space-x-2"
            >
              <span>Разгледай каталога</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-white/50 inline-flex items-center space-x-2"
            >
              <span>Научи повече</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Доволни клиенти</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200">Години опит</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-200">Проекта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Gallery */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Избрани продукти
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Открийте нашите най-популярни и иновативни осветителни решения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300&h=300&fit=crop&crop=center",
              title: "Кристална лампа",
              category: "Луксозни люстри"
            },
            {
              image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&crop=center",
              title: "Модерна лампа",
              category: "Настолни лампи"
            },
            {
              image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center",
              title: "LED осветление",
              category: "Умно осветление"
            },
            {
              image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop&crop=center",
              title: "Дизайнерска лампа",
              category: "Стенни лампи"
            }
          ].map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div 
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${product.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-sm text-gray-300">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/catalog"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <span>Виж всички продукти</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Защо да изберете нас?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Комбинираме стил, функционалност и иновации за създаването на перфектното осветление
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:border-blue-400"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готови ли сте да преобразите пространството си?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Открийте нашата колекция от луксозни осветителни тела и създайте атмосферата, която мечтаете
          </p>
          <Link
            to="/catalog"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Започнете сега
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
