function areaCalculator(){
   const base = inputFieldValue('triangle-base')
   const height = inputFieldValue('triangle-height')
   clear('triangle-base', 'triangle-height')
   const area = 0.5*base*height;
    setAreaElementInnerText('triangle-area', base, height)
    addCalculationToEntry('Triangle', area)

};

// rectangle area
function rectangleAreaCalc(){
    const rectWidth = inputFieldValue('rectangle-width')
    const rectLength = inputFieldValue('rectangle-length');
    clear('rectangle-width','rectangle-length')
    setAreaElementInnerText('rectangle-area', rectWidth, rectLength);
    const area = rectWidth*rectLength;
    addCalculationToEntry('Rectangle', area);
};
// parallelogram area
function parallelArea (){
    const base = inputFieldValue('parallel-base');
    const height = inputFieldValue('parallel-height');
    const area = base*height;
    clear('parallel-base','parallel-height')
    setAreaElementInnerText('parallel-area', base, height);
    addCalculationToEntry('Parallelogram', area)
}