import React, { Component, Fragment } from 'react';
import Dashboard_navBar from '../components/Dashboard_navBar/Dashboard_navBar'
import BrandNavBar from '../components/BrandNavBar/BrandNavBar';
import ShowBrand from '../components/BrandShow/ShowBrand'
class BrandPage extends Component {
    render() {
        return (
            <Fragment>
                <Dashboard_navBar></Dashboard_navBar>
                <BrandNavBar></BrandNavBar>
                <ShowBrand></ShowBrand>
            </Fragment>
        )
    }
}
export default BrandPage;