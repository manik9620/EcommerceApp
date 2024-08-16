import React from "react";
import {Helmet} from "react-helmet";
const Layout = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
    </>
  );
};

Layout.defaultProps = {
  title: 'EzCart - Shop Now',
  description: 'Online Shopping Website which is user friendly, easy to use, easy to buy, fast delivery, good discounts',
  keywords: 'mern, react, node, mongodb',
  author: 'CoffeeCoders',
}

export default Layout;
