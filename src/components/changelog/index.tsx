import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';

const md = require('markdown-it')();

export default function FriendsComponent() {
  const {changelogs} = usePluginData('changelog-data');
  console.log('AHHHH',changelogs)
  return changelogs.map((changelog, i) => {
    const result = md.render(changelog);
    console.log(result)
    return (
      <div>
        {result}
      </div>
    );
  })
}
