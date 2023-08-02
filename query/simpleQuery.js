use("aerospace");

// ================================================================
// launchData Collection
// ================================================================



const findTruthDeviceQuery = {'meta.device': 'truth'}; // find all documents for 'truth' devices

const findDlcDeviceQuery = {'meta.device': 'dlc'};     // find all documents for 'dlc' devices
const findLidarDeviceQuery = {'meta.device': 'lidar'}; // find all documents for 'lidar' devices

db.rocketData.find(findTruthDeviceQuery).limit(10);
db.rocketData.find(findDlcDeviceQuery).limit(10);
db.rocketData.find(findLidarDeviceQuery).limit(10);



// ================================================================
// notes Collection
// ================================================================

const MpS3_GT28 = {parameter: 'OMPS_DopplerSpeed_MpS3',value: {$gt: 28}};

db.notes.find(MpS3_GT28).limit(10)
