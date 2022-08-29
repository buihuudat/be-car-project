import mongoose from "mongoose";

const performance = new mongoose({
  alloyWheels: String,
  engineStartStopButton: Boolean,
  mileage: Number,
  fontSuspension: Number,
  steeringType: String,
  steeringGearType: Boolean,
  frontBrakeType: String,
  length: Number,
  width: Number,
  araiMileage: Number,
  maxTorque: Number,
  transmissionType: String,
})

const audioSystem = new mongoose({
  frontRightTweeter: String,
  frontDoorSpeaker: String,
  underSeatSpeaker: String,
  rearDoorRightTweeter: String,
  bassSystem: Boolean,
  bluetoothSpeaker: Boolean,
  ipad: Boolean,
  digitalSpeaker: Boolean,
  factory: String,
  rearDoorLeftSpeaker: String,
  rearDoorLeftTweeter: String
})

const instrumentationControls = new mongoose({
  rearWheelSuspension: String,
  frontSuspension: String,
  rearStabilizer: String,
  turningRadius: String,
  brakeAssist: Boolean,
  abs: Boolean,
  gear1st: String,
  gear2st: String,
  gear3st: String,
  gear4st: String,
  gear5st: String,
  gear6st: String,
  rpmAt: String,
  finalTransmission: String
})

const comfortConvenience = new mongoose({
  centralLocking: Boolean,
  keyless: Boolean,
  cruiseControl: Boolean,
  airConditioning: Boolean,
  system: Boolean,
  powerSteering: Boolean,
  powerWindowsFront: Boolean,
  powerWindowsRear: Boolean,
  heater: Boolean,
  adjustableSteering: Boolean,
  automaticClimateContrl: Boolean,
  airQualityControl: Boolean,
  remoteTrunkOpener: Boolean,
  remoteFuel: Boolean,
  lowFuelWarning: Boolean
})

const safetyAndSecurity = new mongoose({
  adjustableSeats: Boolean,
  tyrePressureMonitor: Boolean,
  vehicleStability: Boolean,
  controlSystem: Boolean,
  engineImmobilizer: Boolean,
  crashSensor: Boolean,
  centrallyMountedFuelTank: Boolean,
  engineCheckWarning: Boolean,
  automaticHeadlamps: Boolean,
  clutchLock: Boolean,
  ebd: Boolean,
  airQualityControl: Boolean,
  remoteFuel: Boolean,
  lowFuelWarning: Boolean
})

const interior = new mongoose({
  tachometer: Boolean,
  electionic: Boolean,
  leatherSeats: Boolean,
  fabricUpholstery: Boolean,
  leatherSteeringWheel: Boolean,
  gloveCompartment: Boolean,
  digitalClock: Boolean,
  outsideTemperatureDisplay: Boolean,
  cigaretteLighter: Boolean,
  digitalOdometer: Boolean
})

const exterior = new mongoose({
  electricFoldingRearViewMirror: Boolean,
  rainSensingWiper: Boolean,
  rearWindowWiper: Boolean,
  rearWindowWasher: Boolean,
  wheelCovers: Boolean,
  alloyWheelSize: Boolean,
  powerAntenna: Boolean,
  tintedGlass: Boolean,
  rearSpoiler: Boolean,
  top: Boolean,
  roofCarrier: Boolean,
  sunRoof: Boolean
})

const safety = new mongoose({
  antiLockBrakingSystem: Boolean,
  brakeAssist: Boolean,
  centralLocking: Boolean,
  powerDoorLocks: Boolean,
  antiTheftAlarm: Boolean,
  driverAirbag: Boolean,
  passengerAirbag: Boolean,
  sideAirbag: Boolean,
  fontSideAirbag: Boolean,
  rearDay: Boolean,
  passengerSideRear: Boolean,
  xenonHeadlamps: Boolean,
  rearSeatBelts: Boolean,
  seatBeltWarning: Boolean
})

const entertainment = new mongoose({
  cdPlayer: Boolean,
  cdChanger: Boolean,
  dvdPlayer: Boolean,
  radio: Boolean,
  audioSystem: Boolean,
  remoteControl: Boolean,
  speakersFront: Boolean,
  speakersRear: Boolean,
  intergrated: Boolean,
  usb: Boolean,
  bluetooth: Boolean,
  touchScreen: Boolean,
  internalStorage: Boolean,
  noOfSpeakers: Boolean,
  rearEntertainmentSystem: Boolean
})

const autoCheckup = new mongoose({
  basicMilesCheckup: String,
  basicYears: Number,
  corrosionMiles: String,
  corrosion: Number,
  drivetrainMiles: Number,
  drivetrainYears: Number,
  componentsMiles: Number,
  componentsYear: Number,
  maintenanceMiles: Number,
  mainteneneceYears: Number,
  roadsideAssistanceMiles: String,
  roadsideAssistanceYears: Number,
})

const CarModel = new mongoose({
  name: String,
  price: Number,
  image: String,
  performanceEfficiency: [performance],
  audioSystem: [audioSystem],
  instrumentationControls: [instrumentationControls],
  comfortConvenience: [comfortConvenience],
  safetyAndSecurity: [safetyAndSecurity],
  interior: [interior],
  exterior: [exterior],
  safety: [safety],
  entertainment: [entertainment],
  autoCheckup: [autoCheckup]
}, {timestamps: true})

module.exports = mongoose.model('carInfo', CarModel);