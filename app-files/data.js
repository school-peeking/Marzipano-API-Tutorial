var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.8205085122465974,
        "pitch": -0.03971092115788011,
        "fov": 1.4574623516265883
      },
      "linkHotspots": [
        {
          "yaw": -3.108669240838857,
          "pitch": -0.2618816943419322,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7153247834788097,
          "pitch": 0.25841894183107605,
          "title": "입구",
          "text": "본관 입구"
        }
      ]
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.743443703947136,
        "pitch": 0.20470575586692696,
        "fov": 1.4574623516265883
      },
      "linkHotspots": [
        {
          "yaw": -2.7227037156939673,
          "pitch": 0.4051667916376651,
          "rotation": 12.566370614359176,
          "target": "0-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9716223969072644,
          "pitch": -0.2625061283957706,
          "title": "3층",
          "text": "본관 3층 입구"
        }
      ]
    }
  ],
  "name": "TestProject",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
