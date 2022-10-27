import React from "react";
import { NavigateFunction, useLocation, useNavigate, useParams } from "react-router";

export function withRouter( Child ) {
    return ( props ) => {
      const location = useLocation();
      const navigate = useNavigate();
      const params = useParams();
      return <Child { ...props } navigate={ navigate } params={ params } location={ location } />;
    }
  }