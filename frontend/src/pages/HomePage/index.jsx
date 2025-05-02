import './HomePage.css'
import Calendar from '../../components/Calendar/Calendar';
import { useState } from 'react';

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    console.log('선택된 날짜:', date);
  };

  return (<>
    <h1>Vite + React + Spring Boot 프로젝트</h1>
    <div className="home">
      <div className="hero">
        <div className="container">
          
          <p className="hero-description">
            이 프로젝트는 Vite와 React를 사용한 프론트엔드와 Spring Boot를 사용한 백엔드로 구성된 
            현대적인 웹 애플리케이션입니다.
          </p>
        </div>
      </div>
      
      <div className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h2 className="feature-title">Vite</h2>
              <p className="feature-description">
                초고속 개발 환경을 제공하는 Vite를 사용하여 빠른 개발 경험을 제공합니다.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚛️</div>
              <h2 className="feature-title">React</h2>
              <p className="feature-description">
                컴포넌트 기반의 UI 개발로 재사용성과 유지보수성이 뛰어난 프론트엔드를 구현합니다.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h2 className="feature-title">Spring Boot</h2>
              <p className="feature-description">
                강력한 백엔드 프레임워크로 안정적이고 확장 가능한 API를 제공합니다.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Calendar onDateSelect={handleDateSelect} />
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage; 