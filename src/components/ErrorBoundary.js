import React from 'react';
class ErrorBoundary extends React.Component {
     constructor(props) {
       super(props);
       this.state = { hasError: false };
     }
   
     
   
     render() {
       if (this.state.hasError) {
         // Vous pouvez afficher n'importe quelle UI de repli.
         return <h1>Quelque chose s'est mal passé.</h1>;
       }
       return this.props.children;
     }

}
export default ErrorBoundary;