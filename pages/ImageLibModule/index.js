import React,{ Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
// import Nav from '../../components/nav'
import Header from './Header';
import ImageGrid from './ImageGrid';
import Page from '../../components/page';
import '../../static/styles/mycss.css';


class index extends Component {
  render() {
    return (
      <div>
    <Head>
      <title>Home</title>
    </Head>

    <Header />
    <div className="container mb-5">
      <ImageGrid />
    </div>
    
      </div>
    );
  }
}




export default Page(index);
