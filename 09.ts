type Reverse<T extends string> = T extends '' ? T : 
  (T extends `${infer TF}${infer TB}` ? `${TB}${Reverse<TF>}` : T);