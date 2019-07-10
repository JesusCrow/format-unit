import Measure, { measureFrom } from '../pkg'

describe('Measure Class', () => {
  test('.valueOf()', () => {
    const value = new Measure(1)
    const res = Number(value)
    expect(res).toBe(1)
  })

  test('.toString()', () => {
    const string = new Measure(1)
    const res = String(string)
    expect(res).toBe('1 m')
  })

  test('from', () => {
    // 1 gal => 3.79 l
    const measure = new Measure(1, 'gal')
    const res = String(measure.to('l'))
    expect(String(res)).toBe('3.79 l')
  })

  // test('Without "new"' () => {

  // })
})

describe('Floats', () => {
  test('0.9999999999999998', () =>
    expect(Number(new Measure(1 - Number.EPSILON))).toBe(1))
  test('1.0000000000000002', () =>
    expect(Number(new Measure(1 + Number.EPSILON))).toBe(1))
})

describe('Rounding e2', () => {
  const selector = measureFrom('m', 'cm')

  test('1.11', () => expect(String(selector(1.11))).toBe('1.11 m'))
  test('1.111', () => expect(String(selector(1.111))).toBe('1.11 m'))
  test('5.55', () => expect(String(selector(5.55))).toBe('5.55 m'))
  test('5.555', () => expect(String(selector(5.555))).toBe('5.56 m'))
  test('9.99', () => expect(String(selector(9.99))).toBe('9.99 m'))
  test('9.999', () => expect(String(selector(9.999))).toBe('10 m'))
  test('0.001', () => expect(String(selector(0.001))).toBe('0.1 cm'))
  test('0.0001', () => expect(String(selector(0.0001))).toBe('0.01 cm'))
  test('0.00001', () => expect(String(selector(0.00001))).toBe('0 cm'))
  test('0.00005', () => expect(String(selector(0.00005))).toBe('0.01 cm'))
})

// describe('Rounding e3', () => {
//   Measure.precision = 3
//   const selector = measureFrom('m', 'cm')

//   test('1.111', () => expect(String(selector(1.111))).toBe('1.111 m'))
//   test('1.1111', () => expect(String(selector(1.1111))).toBe('1.111 m'))
//   test('5.555', () => expect(String(selector(5.555))).toBe('5.555 m'))
//   test('5.5555', () => expect(String(selector(5.5555))).toBe('5.556 m'))
//   test('9.999', () => expect(String(selector(9.999))).toBe('9.999 m'))
//   test('9.9999', () => expect(String(selector(9.9999))).toBe('10 m'))
//   test('0.0001', () => expect(String(selector(0.0001))).toBe('0.01 cm'))
//   test('0.00001', () => expect(String(selector(0.00001))).toBe('0.001 cm'))
//   test('0.000001', () => expect(String(selector(0.000001))).toBe('0 cm'))
//   test('0.000005', () => expect(String(selector(0.000005))).toBe('0.001 cm'))
// })

test('Convert and restore', () => {
  const meter = new Measure(1)
  const res = String(meter.to('dm').to('m'))
  expect(res).toBe('1 m')
})

test('Convert twice', () => {
  const meter = new Measure(1)
  const res = String(meter.to('km').to('cm'))
  expect(res).toBe('100 cm')
})

// TODO: prefix tests?

describe('Length units', () => {
  test('cm', () => {
    const metre = new Measure(1)
    const res = String(metre.to('cm'))
    expect(res).toBe('100 cm')
  })

  test('m', () => {
    const metre = new Measure(1)
    const res = String(metre)
    expect(res).toBe('1 m')
  })

  test('km', () => {
    const metre = new Measure(1000)
    const res = String(metre.to('km'))
    expect(res).toBe('1 km')
  })

  test('in', () => {
    const metre = new Measure(0.0254)
    const res = String(metre.to('in'))
    expect(res).toBe('1 in')
  })

  test('ft', () => {
    const metre = new Measure(0.3048)
    const res = String(metre.to('ft'))
    expect(res).toBe('1 ft')
  })

  test('yd', () => {
    const metre = new Measure(0.9144)
    const res = String(metre.to('yd'))
    expect(res).toBe('1 yd')
  })

  test('ch', () => {
    const metre = new Measure(20.1168)
    const res = String(metre.to('ch'))
    expect(res).toBe('1 ch')
  })

  test('fur', () => {
    const metre = new Measure(201.168)
    const res = String(metre.to('fur'))
    expect(res).toBe('1 fur')
  })

  test('mi', () => {
    const metre = new Measure(1609.344)
    const res = String(metre.to('mi'))
    expect(res).toBe('1 mi')
  })

  test('lea', () => {
    const metre = new Measure(4828.032)
    const res = String(metre.to('lea'))
    expect(res).toBe('1 lea')
  })

  test('M', () => {
    const metre = new Measure(1852)
    const res = String(metre.to('M'))
    expect(res).toBe('1 M')
  })
})

describe('Area units', () => {
  test('a', () => {
    const measure = new Measure(100)
    const res = measure.to('a')
    expect(String(res)).toBe('1 a')
  })

  test('ha', () => {
    const measure = new Measure(10000)
    const res = measure.to('ha')
    expect(String(res)).toBe('1 ha')
  })

  test('ac', () => {
    const measure = new Measure(4046.86)
    const res = measure.to('ac')
    expect(String(res)).toBe('1 ac')
  })

  test('m2', () => {
    const measure = new Measure(1)
    const res = measure.to('m2')
    expect(String(res)).toBe('1 m²')
  })

  test('km2', () => {
    const measure = new Measure(1000000)
    const res = measure.to('km2')
    expect(String(res)).toBe('1 km²')
  })

  test('yd2', () => {
    const measure = new Measure(0.836127)
    const res = measure.to('yd2')
    expect(String(res)).toBe('1 yd²')
  })

  test('ft2', () => {
    const measure = new Measure(0.092903)
    const res = measure.to('ft2')
    expect(String(res)).toBe('1 ft²')
  })

  test('in2', () => {
    const measure = new Measure(0.00064516)
    const res = measure.to('in2')
    expect(String(res)).toBe('1 in²')
  })

  test('mi2', () => {
    const measure = new Measure(2.59e6)
    const res = measure.to('mi2')
    expect(String(res)).toBe('1 mi²')
  })
})

describe('Volume units', () => {
  test('m3', () => {
    const measure = new Measure(1)
    const res = measure.to('m3')
    expect(String(res)).toBe('1 m³')
  })

  test('1l', () => {
    const measure = new Measure(0.001)
    const res = measure.to('l')
    expect(String(res)).toBe('1 l')
  })

  test('1000 ml', () => {
    const measure = new Measure(0.001)
    const res = measure.to('ml')
    expect(String(res)).toBe('1000 ml')
  })

  test('yd3', () => {
    const measure = new Measure(0.764555)
    const res = measure.to('yd3')
    expect(String(res)).toBe('1 yd³')
  })

  test('ft3', () => {
    const measure = new Measure(0.0283168)
    const res = measure.to('ft3')
    expect(String(res)).toBe('1 ft³')
  })

  test('in3', () => {
    const measure = new Measure(1.63871e-5)
    const res = measure.to('in3')
    expect(String(res)).toBe('1 in³')
  })

  test('mi3', () => {
    const measure = new Measure(4.168e9)
    const res = measure.to('mi3')
    expect(String(res)).toBe('1 mi³')
  })

  test('gal', () => {
    const measure = new Measure(0.00378541)
    const res = measure.to('gal')
    expect(String(res)).toBe('1 gal')
  })

  test('qt', () => {
    const measure = new Measure(0.000946353)
    const res = measure.to('qt')
    expect(String(res)).toBe('1 qt')
  })

  test('pt', () => {
    const measure = new Measure(0.000473176)
    const res = measure.to('pt')
    expect(String(res)).toBe('1 pt')
  })

  test('pt', () => {
    const measure = new Measure(0.000568261)
    const res = measure.to('pint_long')
    expect(String(res)).toBe('1 pt')
  })

  test('fl oz', () => {
    const measure = new Measure(2.95735e-5)
    const res = measure.to('fl oz')
    expect(String(res)).toBe('1 fl oz')
  })
})

describe('(dry) Volume units', () => {
  test('pk', () => {
    const measure = new Measure(0.00880977)
    const res = measure.to('pk')
    expect(String(res)).toBe('1 pk')
  })

  test('bu', () => {
    const measure = new Measure(0.0352391)
    const res = measure.to('bu')
    expect(String(res)).toBe('1 bu')
  })
})

describe('Weight units', () => {
  test('g', () => {
    const measure = new Measure(0.001)
    const res = measure.to('g')
    expect(String(res)).toBe('1 g')
  })

  test('t', () => {
    const measure = new Measure(1000)
    const res = measure.to('t')
    expect(String(res)).toBe('1 t')
  })
  test('t US', () => {
    const measure = new Measure(907.185)
    const res = measure.to('ton_short')
    expect(String(res)).toBe('1 t')
  })

  test('t UK', () => {
    const measure = new Measure(1016.05)
    const res = measure.to('ton_long')
    expect(String(res)).toBe('1 t')
  })

  test('lb', () => {
    const measure = new Measure(0.453592)
    const res = measure.to('lb')
    expect(String(res)).toBe('1 lb')
  })

  test('gr', () => {
    const measure = new Measure(6.479891e-5)
    const res = measure.to('gr')
    expect(String(res)).toBe('1 gr')
  })

  test('dr', () => {
    const measure = new Measure(0.0017718451953125)
    const res = measure.to('dr')
    expect(String(res)).toBe('1 dr')
  })

  test('oz', () => {
    const measure = new Measure(0.0283495)
    const res = measure.to('oz')
    expect(String(res)).toBe('1 oz')
  })

  test('st', () => {
    const measure = new Measure(6.35029)
    const res = measure.to('st')
    expect(String(res)).toBe('1 st')
  })

  test('qr', () => {
    const measure = new Measure(12.70058636)
    const res = measure.to('qr')
    expect(String(res)).toBe('1 qr')
  })

  test('cwt UK', () => {
    const measure = new Measure(50.8)
    const res = measure.to('hundredweight_long')
    expect(String(res)).toBe('1 cwt')
  })

  test('cwt US', () => {
    const measure = new Measure(45.36)
    const res = measure.to('hundredweight_short')
    expect(String(res)).toBe('1 cwt')
  })
})
