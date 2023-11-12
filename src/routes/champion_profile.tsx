import * as React from 'react';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import { championProfileLoader } from 'utils/route_loaders';

export const ChampionProfile = () => {
  const data = useLoaderData() as LoaderData<typeof championProfileLoader>;
  console.log(data);
  return <div>Champion Profile: {} </div>;
};
