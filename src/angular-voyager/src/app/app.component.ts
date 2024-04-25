import {AfterViewInit, Component, ElementRef} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import {ExecutionResult, GraphQLSchema, IntrospectionQuery} from 'graphql';
import {MaybePromise} from "graphql-voyager/typings/utils/usePromise";

// declare var require: any;

// const voyagerWorkerURI = require('file-loader!graphql-voyager/dist/voyager.worker.js');

async function introspectionProvider(query: IntrospectionQuery): Promise<ExecutionResult<IntrospectionQuery> | GraphQLSchema> {
  const response = await fetch('', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query: query}),
  });
  const result = await response.json();

  // Check if the result is a valid ExecutionResult or a GraphQLSchema
  if (result.data && result.data.__schema) {
    return result as ExecutionResult<IntrospectionQuery>;
  } else {
    throw new Error('Invalid introspection result');
  }
}

@Component({
  selector: 'app-voyager-wrapper',
  templateUrl: './wrapper.component.html',
  standalone: true,
  styleUrls: ['./wrapper.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    ReactDOM.render(
      React.createElement(
        Voyager,
        {
          introspection: introspectionProvider as MaybePromise<ExecutionResult<IntrospectionQuery>>,
        }
      ),
      this.elementRef.nativeElement);
  }
}
