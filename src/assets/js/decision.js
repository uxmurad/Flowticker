export const decision = {
  decitionItems: [
    { key: "stocks", title: "Stocks" },
    { key: "indicators", title: "Indicators" },
    { key: "general", title: "General" },
    { key: "options", title: "Options" },
  ],
  decitionData: {
    stocks: [
      {
        id: 1,
        value: "symbol: Price above 100",
      },
      {
        id: 2,
        value: "symbol: Price above label + value",
      },
    ],
    indicators: [
      {
        id: 4,
        value: "symbol: EMA period is above value",
      },
      {
        id: 5,
        value: "symbol: EMA1 period1 crosses above EMA2 period2",
      },
      {
        id: 6,
        value: "symbol: MACD fast slow above signal",
      },
      {
        id: 7,
        value: "symbol: RSI length above value",
      },
      {
        id: 9,
        value: "symbol: Price above Band | window, std_dev",
      },
    ],
    general: [
      {
        id: 8,
        value: "Time is above 1000",
      },
      {
        id: 3,
        value: "Position: Target is above price_percentage value",
      },
      {
        id: 10,
        value:
          "Position: Target is above price_percentage value1 and SL is above value2 trailing by value3",
      },
    ],
  },
  fieldData: {
    symbols: ["NIFTY", "TCS", "INFY"],
    above: ["above", "below"],
    number: [0, 100],
    dttm: "dttm",
    time: "time",
    text: "",
    increased: ["increased", "decreased"],
    indicator: ["EMA", "SMA", "MACD", "RSI"],
    band: ["LOWER-BAND", "UPPER-BAND"],
    position: ["Overall"],
    profit_type: ["Price", "Percentage"],
    target: ["Target", "Loss"],
    label: ["Label1", "Label2"],
    arithmetic: ["Plus", "Minus", "Multiply", "Divide"],
    option: [],
  },
  templateData: {
    stocks: {
      id1: {
        field_id: "ft1",
        field1: "symbol,symbols",
        field2: "above,above",
        field3: "100,number",
      },
      id11: {
        field_id: "ft1",
        field1: "symbol,symbols",
        field2: "above,above",
        field3: "20k,number",
      },
      id10: {
        field_id: "ft2",
        field1: "symbol,symbols",
        field2: "increased,increased",
        field3: "%,number",
        field4: "1day,number",
      },
      id2: {
        field_id: "ft9",
        field1: "symbol,symbols",
        field2: "above,above",
        field3: "label,label",
        field4: "+,arithmetic",
        field5: "value,number",
      },
    },
    indicators: {
      id4: {
        field_id: "ft3",
        field1: "symbol,symbols",
        field2: "EMA,indicator",
        field3: "period,number",
        field4: "above,above",
        field5: "value,number",
      },
      id5: {
        field_id: "ft4",
        field1: "symbol,symbols",
        field2: "EMA1,indicator",
        field3: "period1,number",
        field4: "above,above",
        field5: "EMA2,indicator",
        field6: "period2,number",
      },
      id6: {
        field_id: "ft6",
        field1: "symbol,symbols",
        field2: "MACD,indicator",
        field3: "fast,number",
        field4: "slow,number",
        field5: "above,above",
        field6: "signal,number",
      },
      id7: {
        field_id: "ft3",
        field1: "symbol,symbols",
        field2: "RSI,indicator",
        field3: "length,number",
        field4: "above,above",
        field5: "value,number",
      },
      id9: {
        field_id: "ft8",
        field1: "symbol,symbols",
        field2: "above,above",
        field3: "Band,band",
        field4: "window,number",
        field5: "std_dev,number",
      },
    },
    general: {
      id8: {
        field_id: "ft5",
        field1: "above,above",
        field2: "1000,time",
      },
      id3: {
        field_id: "ft9",
        field1: "Position,position",
        field2: "Target,target",
        field3: "above,above",
        field4: "price_percentage,profit_type",
        field5: "value,number",
      },
      id10: {
        field_id: "ft10",
        field1: "Position,position",
        field2: "price_percentage,profit_type",
        field3: "value1,number",
        field4: "value2,number",
        field5: "value3,number",
      },
    },
  },
  templateObj: {
    ft0: [
      { field1: "select" },
      { field2: "select" },
      { field3: "dttm" },
      { field4: "time" },
      { field5: "text" },
    ],
    ft1: [{ field1: "select" }, { field2: "select" }, { field3: "number" }],
    ft2: [
      { field1: "select" },
      { field2: "select" },
      { field3: "number" },
      { field4: "number" },
    ],
    ft3: [
      { field1: "select" },
      { field2: "select" },
      { field3: "number" },
      { field4: "select" },
      { field5: "number" },
    ],
    ft4: [
      { field1: "select" },
      { field2: "select" },
      { field3: "number" },
      { field4: "select" },
      { field5: "select" },
      { field6: "number" },
    ],
    ft5: [{ field1: "select" }, { field2: "time" }],
    ft6: [
      { field1: "select" },
      { field2: "select" },
      { field3: "number" },
      { field4: "number" },
      { field5: "select" },
      { field6: "number" },
    ],
    ft7: [{ field1: "select" }, { field2: "text" }],
    ft8: [
      { field1: "select" },
      { field2: "select" },
      { field3: "select" },
      { field4: "number" },
      { field5: "number" },
    ],
    ft9: [
      { field1: "select" },
      { field2: "select" },
      { field3: "select" },
      { field4: "select" },
      { field5: "number" },
    ],
    ft10: [
      { field1: "select" },
      { field2: "select" },
      { field3: "number" },
      { field4: "number" },
      { field5: "number" },
    ],
  },
};