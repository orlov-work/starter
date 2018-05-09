import React from 'react';
import { Route } from 'react-router-dom';
import nanoid from 'nanoid';

/**
 * Generate routers by config
 * */
export default function generateRoutes(config) {
  return config.map(route => {
    const { component: Component, componentProps, ...rest } = route;

    return (
      <Route
        key={nanoid(6)}
        component={routeProps => (
          <Component {...componentProps} {...routeProps} />
        )}
        {...rest} />
    );
  });
}
