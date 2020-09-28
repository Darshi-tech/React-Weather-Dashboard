import { useHistory } from 'react-router-dom';
const App = () => {
   const history = useHistory()
   <i className="icon list arrow left"
      onClick={() => {
        history.goBack()
   }}></i>
}