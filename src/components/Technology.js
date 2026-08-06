import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faBolt,
  faServer,
  faGem,
  faMobile,
  faGlobe,
  faCloud,
  faDatabase,
  faFire,
  faChartLine,
  faDiagramProject,
  faGear,
} from '@fortawesome/free-solid-svg-icons'
import {
  faReact,
  faVuejs,
  faAngular,
  faTailwindCss,
  faNodeJs,
  faPython,
  faGolang,
  faJava,
  faFlutter,
  faApple,
  faAndroid,
  faAws,
  faMicrosoft,
  faGoogle,
  faKubernetes,
  faPostgresql,
  faDocker,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import './Technology.css'

const tabs = [
  {
    tabId: 'frontend-tab',
    label: 'Frontend',
    icon: faCode,
    title: 'Frontend Technologies',
    description: ['Cutting-edge frameworks for building modern user interfaces'],
    cards: [
      {
        cardClass: 'tech-card',
        icon: faReact,
        title: 'React.js',
        description: [
          'Component-based library for building',
          'interactive user interfaces with virtual',
          'DOM',
        ],
        features: ['JSX', 'Hooks', 'Redux'],
      },
      {
        cardClass: 'tech-card bg-light-1',
        iconText: 'Next',
        title: 'Next.js',
        description: [
          'Full-stack React framework with',
          'server-side rendering and static',
          'generation',
        ],
        featuresClass: 'features features-2 d-flex justify-content-between align-items-center',
        features: ['SSR', 'SSG', 'API Routes'],
      },
      {
        cardClass: 'tech-card bg-light-2',
        icon: faVuejs,
        title: 'Vue.js',
        description: [
          'Progressive framework for building',
          'user interfaces with excellent',
          'developer experience',
        ],
        featuresClass: 'features features-3 d-flex justify-content-between align-items-center',
        features: ['Composition API', 'Vuex', 'Nuxt'],
      },
      {
        cardClass: 'tech-card bg-light-3',
        icon: faAngular,
        title: 'Angular',
        description: ['Comprehensive platform for building scalable web applications'],
        featuresClass: 'features features-4 d-flex justify-content-between align-items-center',
        features: ['TypeScript', 'RxJS', 'CLI'],
      },
      {
        cardClass: 'tech-card bg-light-4',
        icon: faTailwindCss,
        title: 'Tailwind CSS',
        description: ['Utility-first CSS framework for rapid UI development'],
        featuresClass: 'features features-5 d-flex justify-content-between align-items-center',
        features: ['Utility Classes', 'Responsive', 'Customization'],
      },
      {
        cardClass: 'tech-card bg-light-5',
        icon: faBolt,
        title: 'Vite',
        description: ['Next generation frontend tooling with lightning fast builds'],
        featuresClass: 'features features-6 d-flex justify-content-between align-items-center',
        features: ['Dev Server', 'Hot Reload', 'Rollup'],
      },
    ],
  },
  {
    tabId: 'backend-tab',
    label: 'Backend',
    icon: faServer,
    title: 'Backend Technologies',
    description: ['Robust server-side technologies for scalable and secure applications'],
    cards: [
      {
        cardClass: 'tech-card bg-light-2',
        icon: faNodeJs,
        title: 'Node.js',
        description: [
          "JavaScript runtime built on Chrome's",
          'V8 engine for server-side development',
        ],
        featuresClass: 'features features-3 d-flex justify-content-between align-items-center',
        features: ['Express.js', 'NPM', 'TypeScript'],
      },
      {
        cardClass: 'tech-card',
        icon: faPython,
        title: 'Python',
        description: [
          'Versatile programming language with',
          'powerful frameworks for web development',
        ],
        features: ['Django', 'FastAPI', 'Flask'],
      },
      {
        cardClass: 'tech-card bg-light-6',
        icon: faGolang,
        title: 'Golang',
        description: [
          'Fast, statically typed language designed',
          'for modern software development',
        ],
        featuresClass: 'features features-7 d-flex justify-content-between align-items-center',
        features: ['Gin', 'Goroutines', 'Microservices'],
      },
      {
        cardClass: 'tech-card bg-light-5',
        icon: faJava,
        title: 'Java',
        description: [
          'Enterprise-grade platform with robust',
          'frameworks for large-scale applications',
        ],
        featuresClass: 'features features-6 d-flex justify-content-between align-items-center',
        features: ['Spring Boot', 'Hibernate', 'Maven'],
      },
      {
        cardClass: 'tech-card bg-light-7',
        icon: faMicrosoft,
        title: '.NET Core',
        description: [
          'Cross-platform framework for building',
          'modern, cloud-based applications',
        ],
        featuresClass: 'features features-8 d-flex justify-content-between align-items-center',
        features: ['C#', 'Entity Framework', 'Azure'],
      },
      {
        cardClass: 'tech-card bg-light-8',
        icon: faGem,
        title: 'Ruby',
        description: ['Dynamic language focused on simplicity and productivity'],
        features: ['Rails', 'Sinatra', 'RubyGems'],
      },
    ],
  },
  {
    tabId: 'mobile-tab',
    label: 'Mobile',
    icon: faMobile,
    title: 'Mobile Technologies',
    description: ['Native and cross-platform solutions for iOS and Android development'],
    cards: [
      {
        cardClass: 'tech-card',
        icon: faReact,
        title: 'React Native',
        description: [
          'Cross-platform mobile development',
          'using React and JavaScript',
        ],
        features: ['Expo', 'Navigation', 'Redux'],
      },
      {
        cardClass: 'tech-card bg-light-1',
        icon: faFlutter,
        title: 'Flutter',
        description: ["Google's UI toolkit for building natively compiled applications"],
        featuresClass: 'features features-2 d-flex justify-content-between align-items-center',
        features: ['Dart', 'Widgets', 'Material'],
      },
      {
        cardClass: 'tech-card bg-light-2',
        icon: faApple,
        title: 'iOS Native',
        description: ['Native iOS development using Swift and Xcode'],
        features: ['Swift', 'SwiftUI', 'Core Data'],
      },
      {
        cardClass: 'tech-card bg-light-3',
        icon: faAndroid,
        title: 'Android Native',
        description: ['Native Android development using Kotlin and Android Studio'],
        featuresClass: 'features features-4 d-flex justify-content-between align-items-center',
        features: ['Kotlin', 'Jetpack', 'Room'],
      },
      {
        cardClass: 'tech-card bg-light-4',
        icon: faMicrosoft,
        title: 'Xamarin',
        description: ["Microsoft's cross-platform solution using C# and .NET"],
        features: ['C#', 'Forms', 'MVVM'],
      },
      {
        cardClass: 'tech-card bg-light-5',
        icon: faGlobe,
        title: 'PWA',
        description: ['Progressive Web Apps with native-like mobile experiences'],
        featuresClass: 'features features-6 d-flex justify-content-between align-items-center',
        features: ['Service Worker', 'Manifest', 'Offline'],
      },
    ],
  },
  {
    tabId: 'cloud-devops-tab',
    label: 'Cloud & DevOps',
    icon: faCloud,
    title: 'Cloud & DevOps',
    description: ['Modern cloud infrastructure and deployment technologies'],
    cards: [
      {
        cardClass: 'tech-card bg-light-2',
        icon: faAws,
        title: 'Amazon AWS',
        description: ['Comprehensive cloud computing platform with extensive services'],
        featuresClass: 'features features-3 d-flex justify-content-between align-items-center',
        features: ['EC2', 'Lambda', 'S3'],
      },
      {
        cardClass: 'tech-card',
        icon: faMicrosoft,
        title: 'Microsoft Azure',
        description: ['Enterprise cloud platform with integrated development tools'],
        features: ['App Service', 'Functions', 'DevOps'],
      },
      {
        cardClass: 'tech-card bg-light-6',
        icon: faGoogle,
        title: 'Google Cloud',
        description: ["Google's cloud computing platform with AI and ML capabilities"],
        featuresClass: 'features features-7 d-flex justify-content-between align-items-center',
        features: ['Compute Engine', 'Cloud Run', 'BigQuery'],
      },
      {
        cardClass: 'tech-card bg-light-5',
        icon: faKubernetes,
        title: 'Kubernetes',
        description: ['Container orchestration system for automating deployment and scaling'],
        features: ['Pods', 'Services', 'Helm'],
      },
      {
        cardClass: 'tech-card bg-light-7',
        icon: faDocker,
        title: 'Docker',
        description: ['Containerization platform for consistent application deployment'],
        featuresClass: 'features features-8 d-flex justify-content-between align-items-center',
        features: ['Containers', 'Images', 'Compose'],
      },
      {
        cardClass: 'tech-card bg-light-8',
        icon: faGitAlt,
        title: 'CI/CD Pipeline',
        description: ['Automated build, test, and deployment workflows'],
        featuresClass: 'features features-9 d-flex justify-content-between align-items-center',
        features: ['Jenkins', 'GitHub Actions', 'GitLab CI'],
      },
    ],
  },
  {
    tabId: 'database-tab',
    label: 'Database',
    icon: faDatabase,
    title: 'Database Technologies',
    description: ['Robust data storage solutions for modern applications'],
    cards: [
      {
        cardClass: 'tech-card',
        icon: faPostgresql,
        title: 'PostgreSQL',
        description: ['Advanced open-source relational database with JSON support'],
        features: ['ACID', 'JSON', 'Extensions'],
      },
      {
        cardClass: 'tech-card bg-light-1',
        iconText: 'Mongo',
        title: 'MongoDB',
        description: ['Flexible NoSQL document database for modern-app'],
        featuresClass: 'features features-2 d-flex justify-content-between align-items-center',
        features: ['Documents', 'Aggregation', 'Sharding'],
      },
      {
        cardClass: 'tech-card bg-light-2',
        icon: faFire,
        title: 'Redis',
        description: ['In-memory data structure store for caching and real-time applications'],
        featuresClass: 'features features-3 d-flex justify-content-between align-items-center',
        features: ['Cache', 'Pub/Sub', 'Streams'],
      },
      {
        cardClass: 'tech-card bg-light-3',
        icon: faDatabase,
        title: 'MySQL',
        description: ['Popular open-source relational database management system'],
        featuresClass: 'features features-4 d-flex justify-content-between align-items-center',
        features: ['InnoDB', 'Replication', 'Clustering'],
      },
      {
        cardClass: 'tech-card bg-light-4',
        icon: faChartLine,
        title: 'Elasticsearch',
        description: ['Distributed search and analytics engine for complex queries'],
        featuresClass: 'features features-5 d-flex justify-content-between align-items-center',
        features: ['Search', 'Analytics', 'Kibana'],
      },
      {
        cardClass: 'tech-card bg-light-5',
        icon: faDiagramProject,
        title: 'GraphQL',
        description: ['Query language and runtime for APIs with flexible data fetching'],
        featuresClass: 'features features-6 d-flex justify-content-between align-items-center',
        features: ['Schema', 'Resolvers', 'Apollo'],
      },
    ],
  },
]

const renderParagraph = (lines) =>
  lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ))

const Technology = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].tabId)

  return (
    <section className="tech-stack mb-5" id="Technology">
      <div className="container m-auto">
        <div className="section-heading text-center">
          <span className="tag-line">
            <FontAwesomeIcon icon={faGear} />Technology Stack
          </span>
          <h2>
            Cutting-Edge <span>Technologies</span>
          </h2>
          <p>
            {renderParagraph([
              'We leverage the latest technologies and frameworks to build scalable, secure,',
              'and high-performance solutions.',
            ])}
          </p>
        </div>

        <div className="tab-navigation">
          <ul className="nav justify-content-center" id="myTab" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.tabId
              return (
                <li className="nav-item" role="presentation" key={tab.tabId}>
                  <button
                    className={`nav-link${isActive ? ' active' : ''}`}
                    id={`${tab.tabId}-btn`}
                    type="button"
                    role="tab"
                    aria-controls={tab.tabId}
                    aria-selected={isActive ? 'true' : 'false'}
                    onClick={() => setActiveTab(tab.tabId)}
                  >
                    <FontAwesomeIcon icon={tab.icon} />
                    {tab.label}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="tab-content" id="myTabContent">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.tabId
              return (
                <div
                  key={tab.tabId}
                  className={`tab-pane fade${isActive ? ' show active' : ''}`}
                  id={tab.tabId}
                  role="tabpanel"
                  aria-labelledby={`${tab.tabId}-btn`}
                  tabIndex={0}
                >
                  <div className={tab.containerClass ?? 'container'}>
                    <div className="content-title text-center animation-element">
                      <h3>{tab.title}</h3>
                      <p>{tab.description[0]}</p>
                    </div>
                    <div className="row g-4">
                      {tab.cards.map((card) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 animation-element" key={card.title}>
                          <div className={card.cardClass}>
                            <span className={card.iconText ? 'card-icon color bg-dark' : 'card-icon'}>
                              {card.iconText ? card.iconText : <FontAwesomeIcon icon={card.icon} />}
                            </span>
                            <h5>{card.title}</h5>
                            <p>{renderParagraph(card.description)}</p>
                            <div className={card.featuresClass ?? 'features d-flex justify-content-between align-items-center'}>
                              {card.features.map((feature) => (
                                <span key={feature}>{feature}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
