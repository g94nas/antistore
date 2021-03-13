import React from 'react';

import { KeystoneProvider } from '@keystone-next/admin-ui/context';
import { ErrorBoundary } from '@keystone-next/admin-ui/components';
import { Core } from '@keystone-ui/core';

import * as view3a98d20f from '../../../node_modules/@keystone-next/fields/types/mongoId/views';
import * as view0a4f116d from '../../../node_modules/@keystone-next/fields/types/text/views';
import * as view315b04b6 from '../../../node_modules/@keystone-next/fields/types/password/views';
import * as viewb15ce95c from '../../../node_modules/@keystone-next/fields/types/relationship/views';
import * as viewba6741e3 from '../../../node_modules/@keystone-next/fields/types/timestamp/views';
import * as view590e0a7f from '../../../node_modules/@keystone-next/fields/types/select/views';
import * as viewdde8801f from '../../../node_modules/@keystone-next/fields/types/integer/views';
import * as view27ca6c59 from '../../../node_modules/@keystone-next/fields/types/checkbox/views';
import * as viewc912b70d from '../../../node_modules/@keystone-next/cloudinary/views';
import * as viewa5f22d7c from '../../../node_modules/@keystone-next/fields/types/virtual/views';

const adminConfig = {};

const fieldViews = {
  view3a98d20f,
  view0a4f116d,
  view315b04b6,
  viewb15ce95c,
  viewba6741e3,
  view590e0a7f,
  viewdde8801f,
  view27ca6c59,
  viewc912b70d,
  viewa5f22d7c,
};

const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keystone',
              loc: { start: 22, end: 30 },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'adminMeta',
                    loc: { start: 39, end: 48 },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lists',
                          loc: { start: 59, end: 64 },
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'key',
                                loc: { start: 77, end: 80 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 77, end: 80 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'isHidden',
                                loc: { start: 91, end: 99 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 91, end: 99 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'fields',
                                loc: { start: 110, end: 116 },
                              },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'path',
                                      loc: { start: 131, end: 135 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: { start: 131, end: 135 },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'createView',
                                      loc: { start: 148, end: 158 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'fieldMode',
                                            loc: { start: 175, end: 184 },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: { start: 175, end: 184 },
                                        },
                                      ],
                                      loc: { start: 159, end: 198 },
                                    },
                                    loc: { start: 148, end: 198 },
                                  },
                                ],
                                loc: { start: 117, end: 210 },
                              },
                              loc: { start: 110, end: 210 },
                            },
                          ],
                          loc: { start: 65, end: 220 },
                        },
                        loc: { start: 59, end: 220 },
                      },
                    ],
                    loc: { start: 49, end: 228 },
                  },
                  loc: { start: 39, end: 228 },
                },
              ],
              loc: { start: 31, end: 234 },
            },
            loc: { start: 22, end: 234 },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authenticatedItem' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'User' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export default function App({ Component, pageProps }) {
  return (
    <Core>
      <KeystoneProvider
        adminConfig={adminConfig}
        adminMetaHash="1h3hkzj"
        fieldViews={fieldViews}
        lazyMetadataQuery={lazyMetadataQuery}
      >
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </KeystoneProvider>
    </Core>
  );
}
