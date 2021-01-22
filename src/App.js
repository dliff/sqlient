import './App.css';
import ConnectView from './ConnectView'
import QueryView from './QueryView'
import {attemptConnect} from "./state/actions";
import {connect, useSelector} from "react-redux";

function App() {
    const connection = useSelector(state => state.connection)
    return (
      <>
          {!connection && <ConnectView />}
          {connection && <QueryView />}
      </>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
      connection: state.connection
  }
}
const mapDispatchToProps = { attemptConnect }
export default connect(mapStateToProps, mapDispatchToProps)(App)