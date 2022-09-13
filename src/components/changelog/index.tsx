import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';

export default function FriendsComponent() {
  const {changelogs} = usePluginData('changelog-data');
  return changelogs.map((changelog, i) => (
    <ul>
      <li key={i}>{changelog}</li>
    </ul>
  ));
}
