import {Page, LegacyCard, DataTable, Button} from '@shopify/polaris';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Table({data , title , columnContentType  , headings}) {
  
  console.log( 'Table: ',data)

  return (
    <Page title={title}>
      <LegacyCard>
        <DataTable
          columnContentTypes={columnContentType}
          headings={headings}
          rows={data}
      
        />
      </LegacyCard>
    </Page>
  );
}