/**
 * The program uses a triangle class
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2020-11-01
 */

// Import
import Triangle from './Triangle'

// process
console.log('')

// Triangle 1
const triangle1 = new Triangle(4, 5, 6)
console.log('This is a 4 mm by 5 mm by 6 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle1.isValid().toString())
console.log(
  ' → Semiperimeter: ' + triangle1.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + triangle1.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + triangle1.getType())
console.log(' → Angle 1: ' + triangle1.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + triangle1.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + triangle1.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + triangle1.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + triangle1.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + triangle1.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    triangle1.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    triangle1.circumsicleRadius().toFixed(4) +
    ' mm'
)
console.log('')

// Triangle 2
const triangle2 = new Triangle(2, 5, 6)
console.log('Created a 2 mm by 5 mm by 6 mm triangle.')
console.log(' → Is the triangle valid: ' + triangle2.isValid().toString())
console.log(
  ' → Semiperimeter: ' + triangle2.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + triangle2.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + triangle2.getType())
console.log(' → Angle 1: ' + triangle2.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + triangle2.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + triangle2.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + triangle2.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + triangle2.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + triangle2.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    triangle2.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    triangle2.circumsicleRadius().toFixed(4) +
    ' mm'
)
console.log('')

// Triangle 3
const triangle3 = new Triangle(4, 4, 5)
console.log('Created a 4 mm by 4 mm by 5 mm triangle.')
console.log(' → Is the triangle valid: ' + triangle3.isValid().toString())
console.log(
  ' → Semiperimeter: ' + triangle3.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + triangle3.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + triangle3.getType())
console.log(' → Angle 1: ' + triangle3.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + triangle3.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + triangle3.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + triangle3.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + triangle3.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + triangle3.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    triangle3.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    triangle3.circumsicleRadius().toFixed(4) +
    ' mm'
)
console.log('')

// Triangle 4
const triangle4 = new Triangle(3, 3, 4)
console.log('Created a 3 mm by 3 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + triangle4.isValid().toString())
console.log(
  ' → Semiperimeter: ' + triangle4.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + triangle4.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + triangle4.getType())
console.log(' → Angle 1: ' + triangle4.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + triangle4.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + triangle4.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + triangle4.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + triangle4.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + triangle4.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    triangle4.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    triangle4.circumsicleRadius().toFixed(4) +
    ' mm'
)
console.log('')

// Triangle 5
const triangle5 = new Triangle(16, 8, 10)
console.log('Created a 16 mm by 8 mm by 10 mm triangle.')
console.log(' → Is the triangle valid: ' + triangle5.isValid().toString())
console.log(
  ' → Semiperimeter: ' + triangle5.semiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + triangle5.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + triangle5.getType())
console.log(' → Angle 1: ' + triangle5.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + triangle5.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + triangle5.angle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + triangle5.height(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + triangle5.height(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + triangle5.height(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    triangle5.innerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    triangle5.circumsicleRadius().toFixed(4) +
    ' mm'
)

// Output
console.log('\nDone.')
