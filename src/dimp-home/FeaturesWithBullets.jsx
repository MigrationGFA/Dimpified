// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import bootstrap icons
import { PlayFill, StarFill, Infinity } from 'react-bootstrap-icons';

const FeaturesWithBullets = () => {

  const features = [
    {
      id: 1,
      icon: <PlayFill size={20} />,
      title: 'Super Easy to use'
    },
    {
      id: 2,
      icon: <StarFill size={20} />,
      title: 'SEO-optimized'
    },
    {
      id: 3,
      icon: <Infinity size={20} />,
      title: 'Fast page build'
    },
    {
      id: 4,
      icon: <PlayFill size={20} />,
      title: 'Bespoke Branding'
    },
    {
      id: 5,
      icon: <StarFill size={20} />,
      title: 'Beautiful templates'
    },
    {
      id: 6,
      icon: <Infinity size={20} />,
      title: 'Flexible and responsive'
    }
  ]

  return (
    <section className="py-4">
      <Container>
        <Row>
          <Col xl={{ offset: 1, span: 10 }} md={12} xs={12} >
            <Row>
              {features.map((item, index) => {
                return (
                  
                  <Col xl={2} md={4} xs={6} key={index}>
                    
                      <div className="icon p-4 text-center">
                        <span className='fs-4 text-gray-600'>{item.icon}</span>
                      </div>
                      <div className="ms-3">
                        <p className="mb-0 text-dark text center fw-medium">{item.title}</p>
                      
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturesWithBullets