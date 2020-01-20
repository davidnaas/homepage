import React from 'react'
import Layout from '../components/layout'


const baseURL = 'https://s3.eu-central-1.amazonaws.com/davidnaas-demo/';

const tracks = [
  { title: 'I break fourses', slug: 'I+break+fourses' },
  { title: 'Test driven depression', slug: 'Test+driven+depression' },
  { title: 'Phase locked fugue', slug: 'Phase+locked+fugue' },
  { title: '140816', slug: '140816' },
  { title: 'Milky Lemon', slug: 'Milky+lemon' },
  { title: 'Gloom IV', slug: 'Gloom+IV' },
];

const Demo = () => (
  <Layout>
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      { (() => {
        return (
          tracks.map((track, i) => {
            return (
              <li key={i} style={{ marginBottom: '2rem' }}>
                <h3>{ track.title }</h3>
                <audio src={`${baseURL}${track.slug}.mp3`} controls="controls"/>
              </li>
            );
          })
        );
      })() }
    </ul>
  </Layout>
)

export default Demo;
