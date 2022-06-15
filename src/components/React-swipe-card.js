import Cards, { Card } from 'react-swipe-card'
import { Crew } from "../components/CrewInfo";
import TinderCard from 'react-tinder-card'
 
 
const data = Crew
 
export const Wrapper = () => {
  return (
      <Cards onEnd={('end')} className='master-root'>
        {data.map(item => 
          <Card 
            onSwipeLeft={('swipe left')} 
            onSwipeRight={('swipe right')}>
            <h2>{item}</h2>
            <h5>{item.role}</h5>
          </Card>
        )}
      </Cards>
  )
}