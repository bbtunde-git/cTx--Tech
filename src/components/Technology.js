import React from 'react'
import './Technology.css'

const Technology = () => (
<section className="tech-stack mb-5" id="Technology">
            <div className="container m-auto">
                <div className="section-heading text-center">
                    <span className="tag-line"><i className="fa-solid fa-gear"></i>Technology Stack</span>
                    <h2>Cutting-Edge <span>Technologies</span></h2>
                    <p>We leverage the latest technologies and frameworks to build scalable, secure, <br /> and
                        high-performance
                        solutions.
                    </p>
                </div>
                <div className="tab-navigation">
                    <ul className="nav justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab-btn" data-bs-toggle="tab"
                                data-bs-target="#frontend-tab" type="button" role="tab" aria-controls="frontend-tab"
                                aria-selected="true"><i className="fa-solid fa-code"></i>Frontend</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="home-tab-btn" data-bs-toggle="tab"
                                data-bs-target="#backend-tab" type="button" role="tab" aria-controls="backend-tab"
                                aria-selected="true"><i className="fa-solid fa-server"></i>Backend</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="home-tab-btn" data-bs-toggle="tab" data-bs-target="#mobile-tab"
                                type="button" role="tab" aria-controls="mobile-tab" aria-selected="true"><i
                                    className="fa-solid fa-mobile"></i>Mobile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="home-tab-btn" data-bs-toggle="tab"
                                data-bs-target="#cloud-devops-tab" type="button" role="tab"
                                aria-controls="cloud-devops-tab" aria-selected="true"><i
                                    className="fa-solid fa-cloud"></i>Cloud &
                                DevOps</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="home-tab-btn" data-bs-toggle="tab"
                                data-bs-target="#database-tab" type="button" role="tab" aria-controls="database-tab"
                                aria-selected="true"><i className="fa-solid fa-database"></i>Database</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="frontend-tab" role="tabpanel"
                            aria-labelledby="home-tab-btn" tabIndex={0}>
                            <div className="container slide">
                                <div className="content-title text-center animation-element">
                                    <h3>Frontend Technologies</h3>
                                    <p>Cutting-edge frameworks for building modern user interfaces</p>
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card">
                                            <span className="card-icon"><i className="fa-solid fa-atom"></i></span>
                                            <h5>React.js</h5>
                                            <p>Component-based library for building <br /> interactive user interfaces
                                                with virtual <br /> DOM
                                            </p>
                                            <div className="features d-flex justify-content-between align-items-center">
                                                <span>JSX</span>
                                                <span>Hooks</span>
                                                <span>Redux</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-1">
                                            <span className="card-icon color bg-dark">Next</span>
                                            <h5>Next.js</h5>
                                            <p>Full-stack React framework with <br /> server-side rendering and static
                                                <br /> generation
                                            </p>
                                            <div
                                                className="features features-2 d-flex justify-content-between align-items-center ">
                                                <span className="bg-dark-1">SSR</span>
                                                <span className="bg-dark-1">SSG</span>
                                                <span className="bg-dark-1">API Routes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-2">
                                            <span className="card-icon bg-dark-2"><i className="fa-brands fa-vuejs"></i></span>
                                            <h5>Vue.js</h5>
                                            <p>Progressive framework for building <br /> user interfaces with
                                                excellent <br /> developer
                                                experience
                                            </p>
                                            <div
                                                className="features features-3 d-flex justify-content-between align-items-center">
                                                <span>Composition API</span>
                                                <span>Vuex</span>
                                                <span>Nuxt</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-3">
                                            <span className="card-icon bg-dark-3"><i
                                                    className="fa-brands fa-angular"></i></span>
                                            <h5>Angular</h5>
                                            <p>Comprehensive platform for building <br /> scalable web applications
                                            </p>
                                            <div
                                                className="features features-4 d-flex justify-content-between align-items-center ">
                                                <span>TypeScript</span>
                                                <span>RxJS</span>
                                                <span>CLI</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-4">
                                            <span className="card-icon bg-dark-4 "><i
                                                    className="fa-brands fa-css3-alt"></i></span>
                                            <h5>Tailwind CSS</h5>
                                            <p>Utility-first CSS framework for rapid UI <br /> development
                                            </p>
                                            <div
                                                className="features features-5 d-flex justify-content-between align-items-center">
                                                <span>Utility Classes</span>
                                                <span>Responsive</span>
                                                <span>Customization</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-5">
                                            <span className="card-icon bg-dark-5"><i className="fa-solid fa-bolt"></i></span>
                                            <h5>Vite</h5>
                                            <p>Next generation frontend tooling with <br /> lightning fast builds
                                            </p>
                                            <div
                                                className="features features-6 d-flex justify-content-between align-items-center ">
                                                <span>Dev Server</span>
                                                <span>Hot Reload</span>
                                                <span>Rollup</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content " id="myTabContent">
                        <div className="tab-pane fade" id="backend-tab" role="tabpanel" aria-labelledby="home-tab-btn"
                            tabIndex={0}>
                            <div className="container">
                                <div className="content-title text-center animation-element">
                                    <h3>Backend Technologies</h3>
                                    <p>Robust server-side technologies for scalable and secure applications</p>
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-2">
                                            <span className="card-icon bg-dark-2"><i
                                                    className="fa-brands fa-node-js"></i></span>
                                            <h5>Node.js</h5>
                                            <p>JavaScript runtime built on Chrome's <br /> V8 engine for server-side
                                                development
                                            </p>
                                            <div
                                                className="features features-3 d-flex justify-content-between align-items-center">
                                                <span>Express.js</span>
                                                <span>NPM</span>
                                                <span>TypeScript</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card">
                                            <span className="card-icon"><i className="fa-brands fa-python"></i></span>
                                            <h5>Python</h5>
                                            <p>Versatile programming language with <br /> powerful frameworks for web
                                                development
                                            </p>
                                            <div
                                                className="features d-flex justify-content-between align-items-center">
                                                <span>Django</span>
                                                <span>FastAPI</span>
                                                <span>Flask</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-6">
                                            <span className="card-icon bg-dark-6"><i className="fa-brands fa-golang"></i></span>
                                            <h5>Golang</h5>
                                            <p>Fast, statically typed language designed <br /> for modern software
                                                development
                                            </p>
                                            <div
                                                className="features features-7 d-flex justify-content-between align-items-center ">
                                                <span>Gin</span>
                                                <span>Goroutines</span>
                                                <span>Microservices</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-5">
                                            <span className="card-icon bg-dark-5"><i className="fa-brands fa-java"></i></span>
                                            <h5>Java</h5>
                                            <p>Enterprise-grade platform with robust <br /> frameworks for large-scale
                                                applications
                                            </p>
                                            <div
                                                className="features features-6 d-flex justify-content-between align-items-center">
                                                <span>Spring Boot</span>
                                                <span>Hibernate</span>
                                                <span>Maven</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-7">
                                            <span className="card-icon bg-dark-7"><i className="fa-solid fa-atom"></i></span>
                                            <h5>.NET Core</h5>
                                            <p>Cross-platform framework for building <br /> modern, cloud-based
                                                applications
                                            </p>
                                            <div
                                                className="features features-8 d-flex justify-content-between align-items-center ">
                                                <span>C#</span>
                                                <span>Entity Framework</span>
                                                <span>Azure</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-8">
                                            <span className="card-icon bg-dark-8"><i className="fa-solid fa-gem"></i></span>
                                            <h5>Ruby</h5>
                                            <p>Dynamic language focused on <br /> simplicity and productivity
                                            </p>
                                            <div
                                                className="features features-9 d-flex justify-content-between align-items-center">
                                                <span>Rails</span>
                                                <span>Sinatra</span>
                                                <span>RubyGems</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="mobile-tab" role="tabpanel" aria-labelledby="home-tab-btn"
                            tabIndex={0}>
                            <div className="container slide">
                                <div className="content-title text-center animation-element">
                                    <h3>Mobile Technologies</h3>
                                    <p>Native and cross-platform solutions for iOS and Android development</p>
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card">
                                            <span className="card-icon"><i className="fa-solid fa-atom"></i></span>
                                            <h5>React Native</h5>
                                            <p>Cross-platform mobile development <br /> using React and JavaScript
                                            </p>
                                            <div className="features d-flex justify-content-between align-items-center">
                                                <span>Expo</span>
                                                <span>Navigation</span>
                                                <span>Redux</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-1">
                                            <span className="card-icon color bg-dark"><i
                                                    className="fa-solid fa-mobile"></i></span>
                                            <h5>Flutter</h5>
                                            <p>Google's UI toolkit for building natively <br /> compiled applications
                                            </p>
                                            <div
                                                className="features features-2 d-flex justify-content-between align-items-center ">
                                                <span className="bg-dark-1">Dart</span>
                                                <span className="bg-dark-1">Widgets</span>
                                                <span className="bg-dark-1">Material</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-2">
                                            <span className="card-icon bg-dark-2"><i className="fa-brands fa-apple"></i></span>
                                            <h5>iOS Native</h5>
                                            <p>Native iOS development using Swift <br /> and Xcode
                                            </p>
                                            <div
                                                className="features features-3 d-flex justify-content-between align-items-center">
                                                <span>Swift</span>
                                                <span>SwiftUI</span>
                                                <span>Core Data</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-3">
                                            <span className="card-icon bg-dark-3"><i
                                                    className="fa-brands fa-android"></i></span>
                                            <h5>Android Native</h5>
                                            <p>Native Android development using <br /> Kotlin and Android Studio
                                            </p>
                                            <div
                                                className="features features-4 d-flex justify-content-between align-items-center ">
                                                <span>Kotlin</span>
                                                <span>Jetpack</span>
                                                <span>Room</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-4">
                                            <span className="card-icon bg-dark-4 "><i className="fa-solid fa-code"></i></span>
                                            <h5>Xamarin</h5>
                                            <p>Microsoft's cross-platform solution <br /> using C# and .NET
                                            </p>
                                            <div
                                                className="features features-5 d-flex justify-content-between align-items-center">
                                                <span>C#</span>
                                                <span>Forms</span>
                                                <span>MVVM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-5">
                                            <span className="card-icon bg-dark-5"><i className="fa-solid fa-globe"></i></span>
                                            <h5>PWA</h5>
                                            <p>Progressive Web Apps with native-like <br /> mobile experiences
                                            </p>
                                            <div
                                                className="features features-6 d-flex justify-content-between align-items-center ">
                                                <span>Service Worker</span>
                                                <span>Manifest</span>
                                                <span>Offline</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content " id="myTabContent">
                        <div className="tab-pane fade" id="cloud-devops-tab" role="tabpanel" aria-labelledby="home-tab-btn"
                            tabIndex={0}>
                            <div className="container">
                                <div className="content-title text-center animation-element">
                                    <h3>Cloud & DevOps</h3>
                                    <p>Modern cloud infrastructure and deployment technologies</p>
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-2">
                                            <span className="card-icon bg-dark-2"><i className="fa-brands fa-aws"></i></span>
                                            <h5>Amazon AWS</h5>
                                            <p>Comprehensive cloud computing <br /> platform with extensive services
                                            </p>
                                            <div
                                                className="features features-3 d-flex justify-content-between align-items-center">
                                                <span>EC2</span>
                                                <span>Lambda</span>
                                                <span>S3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card">
                                            <span className="card-icon"><i className="fa-brands fa-microsoft"></i></span>
                                            <h5>Microsoft Azure</h5>
                                            <p>Enterprise cloud platform with <br /> integrated development tools
                                            </p>
                                            <div className="features d-flex justify-content-between align-items-center ">
                                                <span>App Service</span>
                                                <span>Functions</span>
                                                <span>DevOps</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-6">
                                            <span className="card-icon bg-dark-6"><i className="fa-brands fa-google"></i></span>
                                            <h5>Google Cloud</h5>
                                            <p>Google's cloud computing platform <br /> with AI and ML capabilities
                                            </p>
                                            <div
                                                className="features features-7 d-flex justify-content-between align-items-center ">
                                                <span>Compute Engine</span>
                                                <span>Cloud Run</span>
                                                <span>BigQuery</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-5">
                                            <span className="card-icon bg-dark-5 color">K8s</span>
                                            <h5>Kubernetes</h5>
                                            <p>Container orchestration system for <br /> automating deployment and
                                                scaling
                                            </p>
                                            <div
                                                className="features features-6 d-flex justify-content-between align-items-center">
                                                <span>Pods</span>
                                                <span>Services</span>
                                                <span>Helm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-7">
                                            <span className="card-icon bg-dark-7"><i className="fa-brands fa-docker"></i></span>
                                            <h5>Docker</h5>
                                            <p>Containerization platform for <br /> consistent application deployment
                                            </p>
                                            <div
                                                className="features features-8 d-flex justify-content-between align-items-center ">
                                                <span>Containers</span>
                                                <span>Images</span>
                                                <span>Compose</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-8">
                                            <span className="card-icon bg-dark-8"><i
                                                    className="fa-solid fa-head-side-virus"></i></span>
                                            <h5>CI/CD Pipeline</h5>
                                            <p>Automated build, test, and deployment <br /> workflows
                                            </p>
                                            <div
                                                className="features features-9 d-flex justify-content-between align-items-center">
                                                <span>Jenkins</span>
                                                <span>GitHub Actions</span>
                                                <span>GitLab CI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="database-tab" role="tabpanel" aria-labelledby="home-tab-btn"
                            tabIndex={0}>
                            <div className="container slide">
                                <div className="content-title text-center animation-element">
                                    <h3>Database Technologies</h3>
                                    <p>Robust data storage solutions for modern applications</p>
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card">
                                            <span className="card-icon"><i className="fa-solid fa-database"></i></span>
                                            <h5>PostgreSQL</h5>
                                            <p>Advanced open-source relational <br /> database with JSON support
                                            </p>
                                            <div className="features d-flex justify-content-between align-items-center">
                                                <span>ACID</span>
                                                <span>JSON</span>
                                                <span>Extensions</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-1">
                                            <span className="card-icon color bg-dark">Mongo</span>
                                            <h5>MongoDB</h5>
                                            <p>Flexible NoSQL document database for <br /> modern-app
                                            </p>
                                            <div
                                                className="features features-2 d-flex justify-content-between align-items-center ">
                                                <span className="bg-dark-1">Documents</span>
                                                <span className="bg-dark-1">Aggregation</span>
                                                <span className="bg-dark-1">Sharding</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-2">
                                            <span className="card-icon bg-dark-2"><i className="fa-solid fa-fire"></i></span>
                                            <h5>Redis</h5>
                                            <p>In-memory data structure store for <br /> caching and real-time
                                                applications
                                            </p>
                                            <div
                                                className="features features-3 d-flex justify-content-between align-items-center">
                                                <span>Cache</span>
                                                <span>Pub/Sub</span>
                                                <span>Streams</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-3">
                                            <span className="card-icon bg-dark-3"><i
                                                    className="fa-solid fa-database"></i></span>
                                            <h5>MySQL</h5>
                                            <p>Popular open-source relational <br /> database management system
                                            </p>
                                            <div
                                                className="features features-4 d-flex justify-content-between align-items-center ">
                                                <span>InnoDB</span>
                                                <span>Replication</span>
                                                <span>Clustering</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-4">
                                            <span className="card-icon bg-dark-4 "><i
                                                    className="fa-solid fa-chart-line"></i></span>
                                            <h5>Elasticsearch</h5>
                                            <p>Distributed search and analytics engine <br /> for complex queries
                                            </p>
                                            <div
                                                className="features features-5 d-flex justify-content-between align-items-center">
                                                <span>Search</span>
                                                <span>Analytics </span>
                                                <span>Kibana</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 animation-element">
                                        <div className="tech-card bg-light-5">
                                            <span className="card-icon bg-dark-5"><i
                                                    className="fa-solid fa-diagram-project"></i></span>
                                            <h5>GraphQL</h5>
                                            <p>Query language and runtime for APIs <br /> with flexible data fetching
                                            </p>
                                            <div
                                                className="features features-6 d-flex justify-content-between align-items-center ">
                                                <span>Schema</span>
                                                <span>Resolvers</span>
                                                <span>Apollo</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)

export default Technology
