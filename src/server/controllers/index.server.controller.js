'use strict';

import * as express from "express";
import storeConfig from '../../universal/store';
import { renderToString } from 'react-dom/server'
import * as React from 'react';
import * as RenderHelper from '../helpers/RenderHelper';
import { match, RouterContext } from 'react-router';
import { Provider} from 'react-redux';
import config from '../config/config';

export const render = (req, res) => {
    match(RenderHelper.matchRoute(req), matchCallback(res));
};

const matchCallback = (res) => {
    return (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            let store = storeConfig();
            renderProps.createElement = React.createElement;
            let html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
            res.send(RenderHelper.renderFull(html, store));
        } else {
            res.status(404).send('Not found');
        }
    }
}