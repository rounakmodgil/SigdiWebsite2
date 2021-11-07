import React from "react";
import "./Routes.css";
import ScrolltoTop from "./components/ScrolltoTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import MainLanding from "./MainLanding";
import Privacy from "./Privacypolicy";
import Terms from "./Terms";
import Faq from "./Faq";
import Login from "./Login";
import AdminLanding from "../admin/adminlanding";
import Blogs from "./Blogs";
import AdminContact from "../admin/pages/contacts";
function Landing() {
  return (
    <>
      <Router>
        <ScrolltoTop />
        <Switch>
          <Route path="/" exact component={MainLanding} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/privacypolicy" exact component={Privacy} />
          <Route path="/termsandcondition" exact component={Terms} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/bleeblue" exact component={Login} />
          <Route path="/admindashboard" exact component={AdminLanding} />
          <Route path="/admincontact" exact component={AdminContact} />
          <Route path="/blogs" exact component={Blogs} />
        </Switch>
      </Router>
    </>
  );
}

export default Landing;
