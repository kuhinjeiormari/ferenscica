var APP_DATA = {
  "scenes": [
    {
      "id": "0-hodnik1",
      "name": "Hodnik1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.969229313435175,
          "pitch": 0.28765679709819025,
          "rotation": 0,
          "target": "1-kupaona"
        },
        {
          "yaw": 0.06378174846964058,
          "pitch": 0.6409531728265971,
          "rotation": 0,
          "target": "2-hodnik2"
        },
        {
          "yaw": 0.04272997728374861,
          "pitch": 0.230429775268723,
          "rotation": 0,
          "target": "4-spavaca-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kupaona",
      "name": "Kupaona",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7226365448096015,
          "pitch": 0.23670775357023643,
          "rotation": 0,
          "target": "0-hodnik1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hodnik2",
      "name": "Hodnik2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.4819619521926715,
        "pitch": 0.1928007822047526,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": -0.00813779880811083,
          "pitch": 0.09011559577339945,
          "rotation": 0,
          "target": "0-hodnik1"
        },
        {
          "yaw": 0.37553183948251956,
          "pitch": 0.23069727615811253,
          "rotation": 0,
          "target": "1-kupaona"
        },
        {
          "yaw": 3.0461539170887884,
          "pitch": 0.3089626147377018,
          "rotation": 0,
          "target": "4-spavaca-soba"
        },
        {
          "yaw": 1.74824226765071,
          "pitch": 0.251703944106513,
          "rotation": 0,
          "target": "3-predvorje"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-predvorje",
      "name": "Predvorje",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.825558743802258,
          "pitch": 0.20800460286462652,
          "rotation": 0,
          "target": "6-kuhinja"
        },
        {
          "yaw": 0.45753595939432934,
          "pitch": 0.17462857839683998,
          "rotation": 0,
          "target": "5-dnevni-boravak"
        },
        {
          "yaw": 2.497177529189205,
          "pitch": 0.8665500257758936,
          "rotation": 0,
          "target": "2-hodnik2"
        },
        {
          "yaw": 2.0543244492363817,
          "pitch": 0.34472736813867755,
          "rotation": 0,
          "target": "4-spavaca-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-spavaca-soba",
      "name": "Spavaca soba",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18405068136988767,
          "pitch": 0.1976192335994469,
          "rotation": 0,
          "target": "2-hodnik2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dnevni-boravak",
      "name": "Dnevni boravak",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11048152883738638,
          "pitch": 0.18843822268245347,
          "rotation": 0,
          "target": "6-kuhinja"
        },
        {
          "yaw": -0.5144538496581532,
          "pitch": 0.165118603400348,
          "rotation": 0,
          "target": "3-predvorje"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kuhinja",
      "name": "Kuhinja",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.938559120744543,
          "pitch": 0.1546445787607169,
          "rotation": 0,
          "target": "5-dnevni-boravak"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
