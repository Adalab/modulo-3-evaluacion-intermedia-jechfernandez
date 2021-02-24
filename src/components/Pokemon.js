import React from 'react';

class Pokemon extends React.Component{
    render(){
        const card = this.props.family.map((item, i) => {
            return <li key={i}>{item}</li>;
          });

          return(
              <div></div>
          )
    }
    
}





export default Pokemon;