import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel } from 'antd'
import './HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()

  // 搜索类型: single(单程), round(往返), transfer(中转), refund(退改签)
  const [activeTab, setActiveTab] = useState('single')

  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    date: new Date().toISOString().split('T')[0],
    isStudent: false,
    isHighSpeed: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setSearchForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSwap = () => {
    setSearchForm(prev => ({ ...prev, from: prev.to, to: prev.from }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // 简单的校验
    if (!searchForm.from || !searchForm.to) return alert("请输入出发地和目的地")
    navigate('/search-results', { state: searchForm })
  }

  // 定义轮播图组数
  const bannerImages = [
    'https://www.12306.cn/index/images/pic/banner10.jpg',
    'https://www.12306.cn/index/images/pic/banner12.jpg',
    'https://www.12306.cn/index/images/pic/banner26.jpg',
    'https://www.12306.cn/index/images/pic/banner0619.jpg',
    'https://www.12306.cn/index/images/pic/banner20200707.jpg',
    'https://www.12306.cn/index/images/pic/banner20201223.jpg',
  ]

  return (
    <div className="home-page">

      {/* 1. 全屏 Banner 区域 */}
      <div className="hero-section">
        {/* 背景图容器：这里使用一张高铁网络图作为示例，实际需替换为本地图片 */}
        <div className="hero-carousel-wrapper">
          <Carousel autoplay effect="scrollx" dots={false}>
            {bannerImages.map((imgUrl, index) => (
              <div key={index}>
                {/* 每一屏的背景图 */}
                <div
                  className="carousel-bg-item"
                  style={{ backgroundImage: `url(${imgUrl})` }}
                ></div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="hero-content container">

          {/* 左侧：搜索卡片 */}
          <div className="search-card">
            {/* 卡片顶部的 Tab */}
            <div className="search-card-tabs">
              {['single', 'round', 'transfer', 'refund'].map(type => (
                <div
                  key={type}
                  className={`card-tab ${activeTab === type ? 'active' : ''}`}
                  onClick={() => setActiveTab(type)}
                >
                  {type === 'single' && '单程'}
                  {type === 'round' && '往返'}
                  {type === 'transfer' && '中转换乘'}
                  {type === 'refund' && '退改签'}
                </div>
              ))}
            </div>

            {/* 搜索表单内容 */}
            <form className="search-card-body" onSubmit={handleSearch}>

              {/* 出发地 - 目的地 */}
              <div className="form-line stations-line">
                <div className="input-group">
                  <label>出发地</label>
                  <input
                    type="text"
                    name="from"
                    placeholder="简拼/全拼/汉字"
                    value={searchForm.from}
                    onChange={handleInputChange}
                  />
                  <span className="icon-map">📍</span>
                </div>

                <div className="swap-icon" onClick={handleSwap}>
                  ⇌
                </div>

                <div className="input-group">
                  <label>到达地</label>
                  <input
                    type="text"
                    name="to"
                    placeholder="简拼/全拼/汉字"
                    value={searchForm.to}
                    onChange={handleInputChange}
                  />
                  <span className="icon-map">📍</span>
                </div>
              </div>

              {/* 出发日期 */}
              <div className="form-line date-line">
                <div className="input-group full-width">
                  <label>出发日期</label>
                  <input
                    type="date"
                    name="date"
                    value={searchForm.date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* 选项勾选 */}
              <div className="form-line options-line">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="isStudent"
                    checked={searchForm.isStudent}
                    onChange={handleInputChange}
                  /> 学生
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="isHighSpeed"
                    checked={searchForm.isHighSpeed}
                    onChange={handleInputChange}
                  /> 高铁/动车
                </label>
              </div>

              {/* 查询按钮 */}
              <button type="submit" className="hero-search-btn">
                查 询
              </button>
            </form>
          </div>

          {/* 右侧：透明文字/广告区 (模拟官网右侧的保险广告) */}
          {/* <div className="hero-promo">
            <div className="promo-title">铁路乘意险</div>
            <div className="promo-sub">满满诚意 护佑平安</div>
            <div className="promo-desc">给您贴心的保障</div>
          </div> */}

        </div>
      </div>

      {/* 2. 中部服务图标栏 */}
      <div className="service-bar">
        <div className="container service-grid">
          <ServiceItem icon="👤" title="重点旅客预约" />
          <ServiceItem icon="📦" title="遗失物品查找" />
          <ServiceItem icon="🤝" title="约车服务" />
          <ServiceItem icon="🚚" title="便民托运" />
          <ServiceItem icon="🚉" title="车站引导" />
          <ServiceItem icon="🎫" title="站车风采" />
          <ServiceItem icon="💬" title="用户反馈" />
        </div>
      </div>

      {/* 3. 底部展示区 (会员、保险等) */}
      <div className="promo-section container">
        <div className="promo-card card-blue">
          <div className="card-content">
            <h3>会员服务</h3>
            <p>铁路畅行 尊享体验</p>
            <p className="small">12306铁路会员积分服务</p>
          </div>
          <div className="card-icon">💎</div>
        </div>
        <div className="promo-card card-green">
          <div className="card-content">
            <h3>餐饮·特产</h3>
            <p>带有温度的旅途配餐</p>
            <p className="small">享受星级的体验和家乡的味道</p>
          </div>
          <div className="card-icon">🍱</div>
        </div>
      </div>

      {/* 简单的页脚占位 */}
      <div className="simple-footer container">
        <div className="footer-tabs">
          <span>最新发布</span>
          <span>常见问题</span>
          <span>信用信息</span>
        </div>
      </div>

    </div>
  )
}

// 简单的子组件
const ServiceItem = ({ icon, title }) => (
  <div className="service-item">
    <div className="service-icon-circle">{icon}</div>
    <span className="service-title">{title}</span>
  </div>
)

export default HomePage