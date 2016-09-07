var myApp = angular.module('myApp',[]);

myApp.controller('myController', function($scope){
  
  $scope.data = [
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "19/08/2016",
    "Time": "06:49:27",
    "Action": "start"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "19/08/2016",
    "Time": "07:44:07",
    "Action": "start"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "19/08/2016",
    "Time": "07:54:10",
    "Action": "start"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "19/08/2016",
    "Time": "07:58:14",
    "Action": "start"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "19/08/2016",
    "Time": "08:13:24",
    "Action": "start"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "19/08/2016",
    "Time": "08:20:35",
    "Action": "start"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "19/08/2016",
    "Time": "08:20:59",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "19/08/2016",
    "Time": "08:21:05",
    "Action": "start"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "19/08/2016",
    "Time": "08:24:51",
    "Action": "start"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "19/08/2016",
    "Time": "08:33:35",
    "Action": "start"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "19/08/2016",
    "Time": "08:38:13",
    "Action": "start"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "19/08/2016",
    "Time": "08:39:37",
    "Action": "start"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "19/08/2016",
    "Time": "08:40:19",
    "Action": "start"
  },
  {
    "Id": "19",
    "Name": "Maria Kydonaki",
    "Date": "19/08/2016",
    "Time": "08:59:02",
    "Action": "start"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "19/08/2016",
    "Time": "09:03:29",
    "Action": "start"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "19/08/2016",
    "Time": "09:03:36",
    "Action": "start"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "19/08/2016",
    "Time": "09:10:55",
    "Action": "start"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "19/08/2016",
    "Time": "10:21:59",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "19/08/2016",
    "Time": "10:23:14",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "19/08/2016",
    "Time": "10:25:01",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "19/08/2016",
    "Time": "10:28:42",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "19/08/2016",
    "Time": "10:28:56",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "19/08/2016",
    "Time": "10:36:59",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "19/08/2016",
    "Time": "10:43:53",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "19/08/2016",
    "Time": "10:48:31",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "19/08/2016",
    "Time": "10:48:37",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "19/08/2016",
    "Time": "10:48:44",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "19/08/2016",
    "Time": "10:48:49",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "19/08/2016",
    "Time": "10:57:12",
    "Action": "end-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "19/08/2016",
    "Time": "06:27:51",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "22/08/2016",
    "Time": "06:39:07",
    "Action": "start"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "22/08/2016",
    "Time": "07:53:26",
    "Action": "start"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "22/08/2016",
    "Time": "08:00:44",
    "Action": "start"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "22/08/2016",
    "Time": "08:09:44",
    "Action": "start"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "22/08/2016",
    "Time": "08:09:56",
    "Action": "start"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "22/08/2016",
    "Time": "08:15:18",
    "Action": "start"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "22/08/2016",
    "Time": "08:22:09",
    "Action": "start"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "22/08/2016",
    "Time": "08:25:28",
    "Action": "start"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "22/08/2016",
    "Time": "08:27:14",
    "Action": "start"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "22/08/2016",
    "Time": "08:27:21",
    "Action": "start"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "22/08/2016",
    "Time": "08:28:43",
    "Action": "start"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "22/08/2016",
    "Time": "08:29:14",
    "Action": "start"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "22/08/2016",
    "Time": "08:36:24",
    "Action": "start"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "22/08/2016",
    "Time": "08:48:34",
    "Action": "start"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "22/08/2016",
    "Time": "08:48:59",
    "Action": "start"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "22/08/2016",
    "Time": "08:58:29",
    "Action": "start"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "22/08/2016",
    "Time": "09:09:34",
    "Action": "start"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "22/08/2016",
    "Time": "10:11:38",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "22/08/2016",
    "Time": "10:16:07",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "22/08/2016",
    "Time": "10:17:15",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "22/08/2016",
    "Time": "10:20:04",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "22/08/2016",
    "Time": "10:28:16",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "22/08/2016",
    "Time": "10:33:01",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "22/08/2016",
    "Time": "10:33:42",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "22/08/2016",
    "Time": "10:34:23",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "22/08/2016",
    "Time": "10:47:01",
    "Action": "start-rest"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "22/08/2016",
    "Time": "10:47:46",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "22/08/2016",
    "Time": "11:13:02",
    "Action": "end-rest"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "22/08/2016",
    "Time": "11:13:13",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "22/08/2016",
    "Time": "11:18:15",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "22/08/2016",
    "Time": "11:29:49",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "22/08/2016",
    "Time": "11:53:49",
    "Action": "start-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "22/08/2016",
    "Time": "12:05:31",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "22/08/2016",
    "Time": "01:11:06",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "22/08/2016",
    "Time": "01:15:36",
    "Action": "start-rest"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "22/08/2016",
    "Time": "01:16:58",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "22/08/2016",
    "Time": "01:18:07",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "22/08/2016",
    "Time": "01:18:47",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "22/08/2016",
    "Time": "01:31:17",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "22/08/2016",
    "Time": "01:32:28",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "22/08/2016",
    "Time": "01:35:26",
    "Action": "start-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "22/08/2016",
    "Time": "01:37:53",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "22/08/2016",
    "Time": "01:41:36",
    "Action": "start-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "22/08/2016",
    "Time": "01:41:54",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "22/08/2016",
    "Time": "01:44:28",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "22/08/2016",
    "Time": "01:47:00",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "22/08/2016",
    "Time": "01:48:13",
    "Action": "end-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "22/08/2016",
    "Time": "01:48:14",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "22/08/2016",
    "Time": "01:51:19",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "22/08/2016",
    "Time": "01:52:25",
    "Action": "end-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "22/08/2016",
    "Time": "01:52:33",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "22/08/2016",
    "Time": "01:56:47",
    "Action": "end-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "22/08/2016",
    "Time": "02:01:16",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "22/08/2016",
    "Time": "02:01:33",
    "Action": "start-rest"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "22/08/2016",
    "Time": "02:01:42",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "22/08/2016",
    "Time": "02:03:21",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "22/08/2016",
    "Time": "02:05:56",
    "Action": "end-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "22/08/2016",
    "Time": "02:09:59",
    "Action": "end-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "22/08/2016",
    "Time": "02:15:10",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "22/08/2016",
    "Time": "02:18:00",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "22/08/2016",
    "Time": "02:18:50",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "22/08/2016",
    "Time": "02:20:11",
    "Action": "start-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "22/08/2016",
    "Time": "02:20:37",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "22/08/2016",
    "Time": "02:20:47",
    "Action": "end-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "22/08/2016",
    "Time": "02:31:09",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "22/08/2016",
    "Time": "02:41:27",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "22/08/2016",
    "Time": "03:03:58",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "22/08/2016",
    "Time": "03:04:07",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "22/08/2016",
    "Time": "04:55:43",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "22/08/2016",
    "Time": "05:13:29",
    "Action": "leave"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "22/08/2016",
    "Time": "05:16:02",
    "Action": "leave"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "22/08/2016",
    "Time": "05:18:29",
    "Action": "leave"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "22/08/2016",
    "Time": "05:19:27",
    "Action": "leave"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "22/08/2016",
    "Time": "05:21:06",
    "Action": "leave"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "22/08/2016",
    "Time": "05:23:37",
    "Action": "leave"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "22/08/2016",
    "Time": "05:29:03",
    "Action": "leave"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "22/08/2016",
    "Time": "05:31:05",
    "Action": "leave"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "22/08/2016",
    "Time": "05:45:16",
    "Action": "leave"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "22/08/2016",
    "Time": "06:07:41",
    "Action": "leave"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "22/08/2016",
    "Time": "06:18:13",
    "Action": "leave"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "22/08/2016",
    "Time": "06:25:42",
    "Action": "leave"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "22/08/2016",
    "Time": "06:42:12",
    "Action": "leave"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "22/08/2016",
    "Time": "06:43:46",
    "Action": "leave"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "22/08/2016",
    "Time": "06:47:39",
    "Action": "leave"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "22/08/2016",
    "Time": "08:08:31",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "23/08/2016",
    "Time": "06:52:27",
    "Action": "start"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "23/08/2016",
    "Time": "07:38:20",
    "Action": "start"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "23/08/2016",
    "Time": "07:58:45",
    "Action": "start"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "23/08/2016",
    "Time": "08:04:48",
    "Action": "start"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "23/08/2016",
    "Time": "08:10:47",
    "Action": "start"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "23/08/2016",
    "Time": "08:15:06",
    "Action": "start"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "23/08/2016",
    "Time": "08:20:09",
    "Action": "start"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "23/08/2016",
    "Time": "08:21:09",
    "Action": "start"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "23/08/2016",
    "Time": "08:27:26",
    "Action": "start"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "23/08/2016",
    "Time": "08:31:08",
    "Action": "start"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "08:32:10",
    "Action": "start"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "23/08/2016",
    "Time": "08:33:53",
    "Action": "start"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "23/08/2016",
    "Time": "08:34:08",
    "Action": "start"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "23/08/2016",
    "Time": "08:38:21",
    "Action": "start"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "23/08/2016",
    "Time": "08:38:27",
    "Action": "start"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "23/08/2016",
    "Time": "08:39:52",
    "Action": "start"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "23/08/2016",
    "Time": "08:43:44",
    "Action": "start"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "23/08/2016",
    "Time": "08:57:15",
    "Action": "start"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "19/08/2016",
    "Time": "11:36:09",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "19/08/2016",
    "Time": "11:45:00",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "19/08/2016",
    "Time": "01:00:47",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "19/08/2016",
    "Time": "01:01:46",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "19/08/2016",
    "Time": "01:07:39",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "19/08/2016",
    "Time": "01:12:32",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "19/08/2016",
    "Time": "01:19:52",
    "Action": "start-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "19/08/2016",
    "Time": "01:20:49",
    "Action": "start-rest"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "19/08/2016",
    "Time": "01:23:22",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "19/08/2016",
    "Time": "01:25:22",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "19/08/2016",
    "Time": "01:25:47",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "19/08/2016",
    "Time": "01:30:12",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "19/08/2016",
    "Time": "01:37:07",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "19/08/2016",
    "Time": "01:38:40",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "19/08/2016",
    "Time": "01:41:53",
    "Action": "end-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "19/08/2016",
    "Time": "01:42:07",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "19/08/2016",
    "Time": "01:48:23",
    "Action": "start-rest"
  },
  {
    "Id": "19",
    "Name": "Maria Kydonaki",
    "Date": "19/08/2016",
    "Time": "01:50:26",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "19/08/2016",
    "Time": "01:51:40",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "19/08/2016",
    "Time": "02:03:15",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "19/08/2016",
    "Time": "02:04:15",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "19/08/2016",
    "Time": "02:05:36",
    "Action": "end-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "19/08/2016",
    "Time": "02:05:43",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "19/08/2016",
    "Time": "02:07:45",
    "Action": "end-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "19/08/2016",
    "Time": "02:21:40",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "19/08/2016",
    "Time": "02:23:21",
    "Action": "end-rest"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "19/08/2016",
    "Time": "02:23:28",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "19/08/2016",
    "Time": "02:26:51",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "19/08/2016",
    "Time": "02:30:01",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "19/08/2016",
    "Time": "02:31:05",
    "Action": "end-rest"
  },
  {
    "Id": "19",
    "Name": "Maria Kydonaki",
    "Date": "19/08/2016",
    "Time": "02:31:50",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "19/08/2016",
    "Time": "02:55:26",
    "Action": "start-rest"
  },
  {
    "Id": "19",
    "Name": "Maria Kydonaki",
    "Date": "19/08/2016",
    "Time": "02:55:59",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "19/08/2016",
    "Time": "02:56:45",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "19/08/2016",
    "Time": "03:06:29",
    "Action": "end-rest"
  },
  {
    "Id": "19",
    "Name": "Maria Kydonaki",
    "Date": "19/08/2016",
    "Time": "03:06:32",
    "Action": "end-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "22/08/2016",
    "Time": "10:27:47",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "19/08/2016",
    "Time": "04:14:27",
    "Action": "leave"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "19/08/2016",
    "Time": "04:15:03",
    "Action": "leave"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "19/08/2016",
    "Time": "04:23:49",
    "Action": "leave"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "19/08/2016",
    "Time": "04:25:19",
    "Action": "leave"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "19/08/2016",
    "Time": "04:28:25",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "19/08/2016",
    "Time": "04:51:00",
    "Action": "leave"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "19/08/2016",
    "Time": "05:00:13",
    "Action": "leave"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "19/08/2016",
    "Time": "05:19:22",
    "Action": "leave"
  },
  {
    "Id": "19",
    "Name": "Maria Kydonaki",
    "Date": "19/08/2016",
    "Time": "05:19:26",
    "Action": "leave"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "19/08/2016",
    "Time": "05:19:49",
    "Action": "leave"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "19/08/2016",
    "Time": "05:32:53",
    "Action": "leave"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "19/08/2016",
    "Time": "05:33:41",
    "Action": "leave"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "19/08/2016",
    "Time": "06:03:28",
    "Action": "leave"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "19/08/2016",
    "Time": "06:05:47",
    "Action": "leave"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "19/08/2016",
    "Time": "06:06:27",
    "Action": "leave"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "23/08/2016",
    "Time": "08:59:56",
    "Action": "start"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "23/08/2016",
    "Time": "09:06:27",
    "Action": "start"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "23/08/2016",
    "Time": "10:24:33",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "23/08/2016",
    "Time": "10:25:22",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "23/08/2016",
    "Time": "10:25:35",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "23/08/2016",
    "Time": "10:26:25",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "23/08/2016",
    "Time": "10:27:27",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "23/08/2016",
    "Time": "10:27:46",
    "Action": "start-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "23/08/2016",
    "Time": "10:29:27",
    "Action": "start-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "23/08/2016",
    "Time": "10:29:36",
    "Action": "start-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "23/08/2016",
    "Time": "10:29:42",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "23/08/2016",
    "Time": "10:30:13",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "10:30:23",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "23/08/2016",
    "Time": "10:32:18",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "23/08/2016",
    "Time": "10:32:27",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "23/08/2016",
    "Time": "10:32:42",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "23/08/2016",
    "Time": "10:32:49",
    "Action": "start-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "23/08/2016",
    "Time": "10:33:25",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "23/08/2016",
    "Time": "10:33:38",
    "Action": "start-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "23/08/2016",
    "Time": "10:33:48",
    "Action": "start-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "23/08/2016",
    "Time": "10:40:17",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "23/08/2016",
    "Time": "10:40:23",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "23/08/2016",
    "Time": "10:40:42",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "10:41:02",
    "Action": "end-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "23/08/2016",
    "Time": "10:41:39",
    "Action": "end-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "23/08/2016",
    "Time": "10:41:48",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "23/08/2016",
    "Time": "10:41:57",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "23/08/2016",
    "Time": "10:42:21",
    "Action": "end-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "23/08/2016",
    "Time": "10:42:32",
    "Action": "end-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "23/08/2016",
    "Time": "10:42:44",
    "Action": "end-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "23/08/2016",
    "Time": "10:42:51",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "23/08/2016",
    "Time": "10:42:58",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "23/08/2016",
    "Time": "10:43:11",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "23/08/2016",
    "Time": "10:43:17",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "23/08/2016",
    "Time": "10:43:25",
    "Action": "end-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "23/08/2016",
    "Time": "10:44:06",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "23/08/2016",
    "Time": "10:44:11",
    "Action": "end-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "23/08/2016",
    "Time": "10:54:16",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "23/08/2016",
    "Time": "10:54:25",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "11:19:39",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "11:26:19",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "23/08/2016",
    "Time": "12:58:48",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "01:03:55",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "23/08/2016",
    "Time": "01:12:04",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "23/08/2016",
    "Time": "01:12:26",
    "Action": "start-rest"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "23/08/2016",
    "Time": "01:15:08",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "23/08/2016",
    "Time": "01:15:17",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "23/08/2016",
    "Time": "01:22:51",
    "Action": "start-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "23/08/2016",
    "Time": "01:25:35",
    "Action": "start-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "23/08/2016",
    "Time": "01:30:56",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "23/08/2016",
    "Time": "01:31:03",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "23/08/2016",
    "Time": "01:31:13",
    "Action": "start"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "24/08/2016",
    "Time": "08:26:20",
    "Action": "start"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "24/08/2016",
    "Time": "08:30:50",
    "Action": "start"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "24/08/2016",
    "Time": "08:30:52",
    "Action": "start"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "24/08/2016",
    "Time": "08:33:45",
    "Action": "start"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "24/08/2016",
    "Time": "08:35:46",
    "Action": "start"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "24/08/2016",
    "Time": "08:36:21",
    "Action": "start"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "24/08/2016",
    "Time": "08:40:35",
    "Action": "start"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "24/08/2016",
    "Time": "08:45:58",
    "Action": "start"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "24/08/2016",
    "Time": "08:51:13",
    "Action": "start"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "24/08/2016",
    "Time": "08:54:18",
    "Action": "start"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "24/08/2016",
    "Time": "08:59:23",
    "Action": "start"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "24/08/2016",
    "Time": "09:09:23",
    "Action": "start"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "24/08/2016",
    "Time": "10:07:34",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "24/08/2016",
    "Time": "10:13:22",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "24/08/2016",
    "Time": "10:18:25",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "24/08/2016",
    "Time": "10:19:16",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "24/08/2016",
    "Time": "10:19:22",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "24/08/2016",
    "Time": "10:25:35",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "24/08/2016",
    "Time": "10:34:29",
    "Action": "end-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "24/08/2016",
    "Time": "10:34:52",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "24/08/2016",
    "Time": "10:43:45",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "24/08/2016",
    "Time": "10:44:17",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "24/08/2016",
    "Time": "10:44:56",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "24/08/2016",
    "Time": "10:45:32",
    "Action": "end-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "24/08/2016",
    "Time": "10:49:57",
    "Action": "start"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "24/08/2016",
    "Time": "11:00:09",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "24/08/2016",
    "Time": "11:00:57",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "24/08/2016",
    "Time": "11:16:57",
    "Action": "start-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "24/08/2016",
    "Time": "11:17:48",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "24/08/2016",
    "Time": "11:19:14",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "24/08/2016",
    "Time": "11:29:41",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "24/08/2016",
    "Time": "11:34:53",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "24/08/2016",
    "Time": "11:36:47",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "24/08/2016",
    "Time": "11:37:14",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "24/08/2016",
    "Time": "11:49:11",
    "Action": "end-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "24/08/2016",
    "Time": "11:54:24",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "24/08/2016",
    "Time": "01:10:44",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "24/08/2016",
    "Time": "01:14:10",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "24/08/2016",
    "Time": "01:14:12",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "24/08/2016",
    "Time": "01:14:19",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "24/08/2016",
    "Time": "01:15:46",
    "Action": "start-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "24/08/2016",
    "Time": "01:16:48",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "24/08/2016",
    "Time": "01:17:59",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "24/08/2016",
    "Time": "01:30:34",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "24/08/2016",
    "Time": "01:32:08",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "24/08/2016",
    "Time": "01:34:41",
    "Action": "end-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "24/08/2016",
    "Time": "01:35:19",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "24/08/2016",
    "Time": "01:37:22",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "24/08/2016",
    "Time": "01:42:54",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "24/08/2016",
    "Time": "01:45:13",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "24/08/2016",
    "Time": "01:50:06",
    "Action": "end-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "24/08/2016",
    "Time": "01:51:29",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "25/08/2016",
    "Time": "08:38:38",
    "Action": "start"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "08:45:27",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "08:46:05",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "25/08/2016",
    "Time": "08:48:32",
    "Action": "start"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "25/08/2016",
    "Time": "08:57:33",
    "Action": "start"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "25/08/2016",
    "Time": "08:58:29",
    "Action": "start"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "25/08/2016",
    "Time": "08:59:45",
    "Action": "start"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "25/08/2016",
    "Time": "09:10:38",
    "Action": "start"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "25/08/2016",
    "Time": "10:14:25",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "25/08/2016",
    "Time": "10:14:50",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "25/08/2016",
    "Time": "10:18:10",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "25/08/2016",
    "Time": "10:18:18",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "10:19:46",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "25/08/2016",
    "Time": "10:20:52",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "25/08/2016",
    "Time": "10:25:00",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "25/08/2016",
    "Time": "10:31:23",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "25/08/2016",
    "Time": "10:31:51",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "10:32:07",
    "Action": "end-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "25/08/2016",
    "Time": "10:36:31",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "25/08/2016",
    "Time": "10:39:31",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "25/08/2016",
    "Time": "10:42:46",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "25/08/2016",
    "Time": "10:43:21",
    "Action": "start-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "25/08/2016",
    "Time": "10:44:05",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "25/08/2016",
    "Time": "10:59:44",
    "Action": "start-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "25/08/2016",
    "Time": "11:10:35",
    "Action": "start-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "25/08/2016",
    "Time": "11:19:31",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "25/08/2016",
    "Time": "11:24:43",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "25/08/2016",
    "Time": "11:24:52",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "25/08/2016",
    "Time": "11:27:41",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "25/08/2016",
    "Time": "11:35:41",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "25/08/2016",
    "Time": "11:39:44",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "25/08/2016",
    "Time": "11:41:43",
    "Action": "end-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "25/08/2016",
    "Time": "01:00:56",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "25/08/2016",
    "Time": "01:04:15",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "25/08/2016",
    "Time": "01:11:04",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "25/08/2016",
    "Time": "01:11:15",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "25/08/2016",
    "Time": "01:11:25",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "01:11:53",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "25/08/2016",
    "Time": "01:13:13",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "25/08/2016",
    "Time": "01:16:02",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "25/08/2016",
    "Time": "01:16:53",
    "Action": "start-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "25/08/2016",
    "Time": "01:17:39",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "25/08/2016",
    "Time": "01:19:39",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "25/08/2016",
    "Time": "01:27:55",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "25/08/2016",
    "Time": "01:32:27",
    "Action": "end-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "25/08/2016",
    "Time": "01:32:38",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "25/08/2016",
    "Time": "01:38:35",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "25/08/2016",
    "Time": "01:39:41",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "25/08/2016",
    "Time": "01:42:14",
    "Action": "start-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "25/08/2016",
    "Time": "01:46:52",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "01:52:59",
    "Action": "end-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "25/08/2016",
    "Time": "01:57:12",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "25/08/2016",
    "Time": "01:57:59",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "25/08/2016",
    "Time": "01:58:24",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "25/08/2016",
    "Time": "02:00:15",
    "Action": "end-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "25/08/2016",
    "Time": "02:02:29",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "25/08/2016",
    "Time": "02:02:41",
    "Action": "start-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "25/08/2016",
    "Time": "02:08:03",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "25/08/2016",
    "Time": "02:19:04",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "25/08/2016",
    "Time": "02:19:11",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "25/08/2016",
    "Time": "02:19:19",
    "Action": "end-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "25/08/2016",
    "Time": "02:21:54",
    "Action": "end-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "25/08/2016",
    "Time": "02:26:38",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "25/08/2016",
    "Time": "02:26:41",
    "Action": "end-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "25/08/2016",
    "Time": "02:26:50",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "25/08/2016",
    "Time": "02:27:17",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "25/08/2016",
    "Time": "02:30:39",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "25/08/2016",
    "Time": "02:49:43",
    "Action": "end-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "04:11:59",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "04:21:47",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "25/08/2016",
    "Time": "04:33:54",
    "Action": "leave"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "25/08/2016",
    "Time": "04:39:00",
    "Action": "leave"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "25/08/2016",
    "Time": "05:16:14",
    "Action": "leave"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "25/08/2016",
    "Time": "05:16:57",
    "Action": "start-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "25/08/2016",
    "Time": "05:17:12",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "25/08/2016",
    "Time": "05:18:52",
    "Action": "leave"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "25/08/2016",
    "Time": "05:23:58",
    "Action": "leave"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "25/08/2016",
    "Time": "05:31:53",
    "Action": "leave"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "25/08/2016",
    "Time": "05:32:16",
    "Action": "leave"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "05:35:16",
    "Action": "leave"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "25/08/2016",
    "Time": "05:39:46",
    "Action": "leave"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "25/08/2016",
    "Time": "05:39:55",
    "Action": "leave"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "25/08/2016",
    "Time": "05:50:59",
    "Action": "leave"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "25/08/2016",
    "Time": "05:51:23",
    "Action": "leave"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "25/08/2016",
    "Time": "05:52:13",
    "Action": "leave"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "25/08/2016",
    "Time": "06:17:56",
    "Action": "leave"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "25/08/2016",
    "Time": "06:35:13",
    "Action": "leave"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "25/08/2016",
    "Time": "06:39:39",
    "Action": "leave"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "25/08/2016",
    "Time": "07:02:28",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "25/08/2016",
    "Time": "07:02:50",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "26/08/2016",
    "Time": "06:12:33",
    "Action": "start"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "26/08/2016",
    "Time": "07:40:42",
    "Action": "start"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "26/08/2016",
    "Time": "07:57:38",
    "Action": "start"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "26/08/2016",
    "Time": "08:04:35",
    "Action": "start"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "26/08/2016",
    "Time": "08:10:30",
    "Action": "start"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "26/08/2016",
    "Time": "08:24:24",
    "Action": "start"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "26/08/2016",
    "Time": "08:26:14",
    "Action": "start"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "26/08/2016",
    "Time": "08:27:21",
    "Action": "start"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "26/08/2016",
    "Time": "08:28:59",
    "Action": "start"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "26/08/2016",
    "Time": "08:29:59",
    "Action": "start"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "26/08/2016",
    "Time": "08:32:19",
    "Action": "start"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "26/08/2016",
    "Time": "08:32:25",
    "Action": "start"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "26/08/2016",
    "Time": "08:39:05",
    "Action": "start"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "26/08/2016",
    "Time": "08:42:14",
    "Action": "start"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "26/08/2016",
    "Time": "08:42:20",
    "Action": "start"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "26/08/2016",
    "Time": "08:57:28",
    "Action": "start"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "26/08/2016",
    "Time": "08:59:13",
    "Action": "start"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "26/08/2016",
    "Time": "10:27:59",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "26/08/2016",
    "Time": "10:28:17",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "26/08/2016",
    "Time": "10:28:53",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "26/08/2016",
    "Time": "10:30:40",
    "Action": "start-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "26/08/2016",
    "Time": "10:34:44",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "26/08/2016",
    "Time": "10:36:36",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "26/08/2016",
    "Time": "10:37:59",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "26/08/2016",
    "Time": "10:41:14",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "26/08/2016",
    "Time": "10:41:48",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "26/08/2016",
    "Time": "10:46:58",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "26/08/2016",
    "Time": "10:47:53",
    "Action": "end-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "26/08/2016",
    "Time": "10:48:44",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "26/08/2016",
    "Time": "10:49:48",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "26/08/2016",
    "Time": "10:49:57",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "26/08/2016",
    "Time": "11:04:30",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "26/08/2016",
    "Time": "11:05:09",
    "Action": "end-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "26/08/2016",
    "Time": "11:10:20",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "26/08/2016",
    "Time": "11:12:13",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "26/08/2016",
    "Time": "11:14:33",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "26/08/2016",
    "Time": "11:16:31",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "26/08/2016",
    "Time": "11:23:37",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "26/08/2016",
    "Time": "11:24:33",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "26/08/2016",
    "Time": "11:59:30",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "26/08/2016",
    "Time": "12:10:42",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "26/08/2016",
    "Time": "12:28:30",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "26/08/2016",
    "Time": "01:04:04",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "26/08/2016",
    "Time": "01:05:19",
    "Action": "start-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "26/08/2016",
    "Time": "01:07:29",
    "Action": "leave"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "26/08/2016",
    "Time": "01:11:59",
    "Action": "start-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "26/08/2016",
    "Time": "01:12:14",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "26/08/2016",
    "Time": "01:12:20",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "26/08/2016",
    "Time": "01:12:26",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "26/08/2016",
    "Time": "01:12:32",
    "Action": "start-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "26/08/2016",
    "Time": "01:31:03",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "26/08/2016",
    "Time": "01:31:20",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "26/08/2016",
    "Time": "01:33:25",
    "Action": "start-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "26/08/2016",
    "Time": "01:34:43",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "26/08/2016",
    "Time": "01:34:50",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "26/08/2016",
    "Time": "01:36:34",
    "Action": "start-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "26/08/2016",
    "Time": "01:39:14",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "26/08/2016",
    "Time": "01:39:50",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "26/08/2016",
    "Time": "01:41:25",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "26/08/2016",
    "Time": "01:41:36",
    "Action": "start-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "26/08/2016",
    "Time": "01:44:16",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "26/08/2016",
    "Time": "01:44:59",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "26/08/2016",
    "Time": "01:45:46",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "26/08/2016",
    "Time": "01:47:30",
    "Action": "end-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "26/08/2016",
    "Time": "01:51:50",
    "Action": "end-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "26/08/2016",
    "Time": "01:54:05",
    "Action": "end-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "23/08/2016",
    "Time": "01:33:03",
    "Action": "end-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "23/08/2016",
    "Time": "01:33:09",
    "Action": "end-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "01:34:48",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "23/08/2016",
    "Time": "01:39:20",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "23/08/2016",
    "Time": "01:40:31",
    "Action": "start-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "23/08/2016",
    "Time": "01:45:16",
    "Action": "end-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "23/08/2016",
    "Time": "01:46:10",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "23/08/2016",
    "Time": "01:46:16",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "23/08/2016",
    "Time": "01:46:25",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "23/08/2016",
    "Time": "01:55:09",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "23/08/2016",
    "Time": "01:57:01",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "23/08/2016",
    "Time": "01:58:01",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "23/08/2016",
    "Time": "02:03:24",
    "Action": "end-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "23/08/2016",
    "Time": "02:08:31",
    "Action": "end-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "23/08/2016",
    "Time": "02:09:40",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "23/08/2016",
    "Time": "02:11:36",
    "Action": "start-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "23/08/2016",
    "Time": "02:12:33",
    "Action": "end-rest"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "23/08/2016",
    "Time": "02:12:40",
    "Action": "end-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "23/08/2016",
    "Time": "02:13:40",
    "Action": "start-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "23/08/2016",
    "Time": "02:18:52",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "23/08/2016",
    "Time": "02:22:12",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "23/08/2016",
    "Time": "02:22:49",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "23/08/2016",
    "Time": "02:32:15",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "23/08/2016",
    "Time": "02:45:46",
    "Action": "end-rest"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "23/08/2016",
    "Time": "02:46:45",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "23/08/2016",
    "Time": "04:36:12",
    "Action": "start"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "04:42:10",
    "Action": "start-rest"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "04:47:46",
    "Action": "end-rest"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "23/08/2016",
    "Time": "05:22:33",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "23/08/2016",
    "Time": "05:28:19",
    "Action": "leave"
  },
  {
    "Id": "11",
    "Name": "Leoni Barrios",
    "Date": "23/08/2016",
    "Time": "05:35:39",
    "Action": "leave"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "23/08/2016",
    "Time": "05:36:38",
    "Action": "leave"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "23/08/2016",
    "Time": "05:39:57",
    "Action": "leave"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "23/08/2016",
    "Time": "05:42:51",
    "Action": "leave"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "23/08/2016",
    "Time": "05:55:36",
    "Action": "leave"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "23/08/2016",
    "Time": "05:57:31",
    "Action": "leave"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "23/08/2016",
    "Time": "06:07:33",
    "Action": "leave"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "23/08/2016",
    "Time": "06:14:40",
    "Action": "leave"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "23/08/2016",
    "Time": "06:20:59",
    "Action": "leave"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "23/08/2016",
    "Time": "06:30:05",
    "Action": "leave"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "23/08/2016",
    "Time": "06:38:24",
    "Action": "leave"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "23/08/2016",
    "Time": "06:46:21",
    "Action": "leave"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "23/08/2016",
    "Time": "07:12:31",
    "Action": "leave"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "23/08/2016",
    "Time": "08:20:26",
    "Action": "leave"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "23/08/2016",
    "Time": "08:20:34",
    "Action": "leave"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "23/08/2016",
    "Time": "08:23:45",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "24/08/2016",
    "Time": "06:53:58",
    "Action": "start"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "24/08/2016",
    "Time": "07:51:11",
    "Action": "start"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "24/08/2016",
    "Time": "07:58:14",
    "Action": "start"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "24/08/2016",
    "Time": "08:09:59",
    "Action": "start"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "24/08/2016",
    "Time": "08:16:31",
    "Action": "start"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "24/08/2016",
    "Time": "08:16:45",
    "Action": "start"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "24/08/2016",
    "Time": "01:53:45",
    "Action": "start-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "24/08/2016",
    "Time": "01:57:13",
    "Action": "start-rest"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "24/08/2016",
    "Time": "01:59:05",
    "Action": "end-rest"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "24/08/2016",
    "Time": "01:59:38",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "24/08/2016",
    "Time": "02:00:19",
    "Action": "start-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "24/08/2016",
    "Time": "02:00:30",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "24/08/2016",
    "Time": "02:06:43",
    "Action": "start-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "24/08/2016",
    "Time": "02:13:06",
    "Action": "end-rest"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "24/08/2016",
    "Time": "02:15:17",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "24/08/2016",
    "Time": "02:16:25",
    "Action": "start-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "24/08/2016",
    "Time": "02:16:36",
    "Action": "start-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "24/08/2016",
    "Time": "02:20:18",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "24/08/2016",
    "Time": "02:20:25",
    "Action": "end-rest"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "24/08/2016",
    "Time": "02:26:45",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "24/08/2016",
    "Time": "02:38:03",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "24/08/2016",
    "Time": "02:45:47",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "24/08/2016",
    "Time": "02:45:53",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "24/08/2016",
    "Time": "02:48:55",
    "Action": "end-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "24/08/2016",
    "Time": "02:49:00",
    "Action": "end-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "24/08/2016",
    "Time": "03:49:28",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "24/08/2016",
    "Time": "03:56:33",
    "Action": "end-rest"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "24/08/2016",
    "Time": "04:11:28",
    "Action": "leave"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "24/08/2016",
    "Time": "04:14:46",
    "Action": "leave"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "24/08/2016",
    "Time": "05:04:29",
    "Action": "leave"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "24/08/2016",
    "Time": "05:06:50",
    "Action": "leave"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "24/08/2016",
    "Time": "05:16:37",
    "Action": "leave"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "24/08/2016",
    "Time": "05:19:19",
    "Action": "leave"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "24/08/2016",
    "Time": "05:20:14",
    "Action": "leave"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "24/08/2016",
    "Time": "05:23:02",
    "Action": "leave"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "24/08/2016",
    "Time": "05:26:01",
    "Action": "start-rest"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "24/08/2016",
    "Time": "05:26:07",
    "Action": "leave"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "24/08/2016",
    "Time": "05:30:03",
    "Action": "leave"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "24/08/2016",
    "Time": "05:36:19",
    "Action": "leave"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "24/08/2016",
    "Time": "05:36:28",
    "Action": "leave"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "24/08/2016",
    "Time": "05:51:57",
    "Action": "leave"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "24/08/2016",
    "Time": "05:53:45",
    "Action": "leave"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "24/08/2016",
    "Time": "06:38:47",
    "Action": "leave"
  },
  {
    "Id": "1",
    "Name": "Manu Uzkudun",
    "Date": "24/08/2016",
    "Time": "06:57:34",
    "Action": "leave"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "24/08/2016",
    "Time": "07:11:41",
    "Action": "leave"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "24/08/2016",
    "Time": "07:15:47",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "25/08/2016",
    "Time": "06:15:30",
    "Action": "start"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "25/08/2016",
    "Time": "07:45:54",
    "Action": "start"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "25/08/2016",
    "Time": "07:55:13",
    "Action": "start"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "25/08/2016",
    "Time": "08:05:58",
    "Action": "start"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "25/08/2016",
    "Time": "08:11:30",
    "Action": "start"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "25/08/2016",
    "Time": "08:19:10",
    "Action": "start"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "25/08/2016",
    "Time": "08:27:15",
    "Action": "start"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "25/08/2016",
    "Time": "08:31:50",
    "Action": "start"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "25/08/2016",
    "Time": "08:31:59",
    "Action": "start"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "25/08/2016",
    "Time": "08:34:57",
    "Action": "start"
  },
  {
    "Id": "12",
    "Name": "Lucia Russo",
    "Date": "25/08/2016",
    "Time": "08:35:03",
    "Action": "start"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "25/08/2016",
    "Time": "08:36:58",
    "Action": "start"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "26/08/2016",
    "Time": "01:54:15",
    "Action": "end-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "26/08/2016",
    "Time": "02:02:36",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "26/08/2016",
    "Time": "02:05:02",
    "Action": "end-rest"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "26/08/2016",
    "Time": "02:05:50",
    "Action": "end-rest"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "26/08/2016",
    "Time": "02:10:23",
    "Action": "end-rest"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "26/08/2016",
    "Time": "02:10:53",
    "Action": "end-rest"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "26/08/2016",
    "Time": "02:13:06",
    "Action": "end-rest"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "26/08/2016",
    "Time": "02:15:06",
    "Action": "end-rest"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "26/08/2016",
    "Time": "02:37:19",
    "Action": "end-rest"
  },
  {
    "Id": "13",
    "Name": "Monica Martinez",
    "Date": "26/08/2016",
    "Time": "03:02:28",
    "Action": "leave"
  },
  {
    "Id": "7",
    "Name": "Clara Villalba",
    "Date": "26/08/2016",
    "Time": "04:01:42",
    "Action": "leave"
  },
  {
    "Id": "5",
    "Name": "Jaime Llorca",
    "Date": "26/08/2016",
    "Time": "04:01:50",
    "Action": "leave"
  },
  {
    "Id": "14",
    "Name": "Antonio Peteira",
    "Date": "26/08/2016",
    "Time": "04:02:06",
    "Action": "leave"
  },
  {
    "Id": "18",
    "Name": "Cristina Arimany",
    "Date": "26/08/2016",
    "Time": "04:03:09",
    "Action": "leave"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "26/08/2016",
    "Time": "04:06:42",
    "Action": "start-rest"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "26/08/2016",
    "Time": "04:13:08",
    "Action": "end-rest"
  },
  {
    "Id": "4",
    "Name": "Ada Repiso",
    "Date": "26/08/2016",
    "Time": "04:16:16",
    "Action": "leave"
  },
  {
    "Id": "3",
    "Name": "Lidia Garcia",
    "Date": "26/08/2016",
    "Time": "04:22:22",
    "Action": "leave"
  },
  {
    "Id": "16",
    "Name": "Gihan Joshua",
    "Date": "26/08/2016",
    "Time": "04:40:10",
    "Action": "leave"
  },
  {
    "Id": "15",
    "Name": "Michele Cardani",
    "Date": "26/08/2016",
    "Time": "04:47:09",
    "Action": "leave"
  },
  {
    "Id": "9",
    "Name": "Cristina Saez",
    "Date": "26/08/2016",
    "Time": "04:47:52",
    "Action": "leave"
  },
  {
    "Id": "10",
    "Name": "Monica Colina",
    "Date": "26/08/2016",
    "Time": "04:59:26",
    "Action": "leave"
  },
  {
    "Id": "2",
    "Name": "Isabel Martinez",
    "Date": "26/08/2016",
    "Time": "05:30:06",
    "Action": "leave"
  },
  {
    "Id": "6",
    "Name": "Mireia Guardingo ",
    "Date": "26/08/2016",
    "Time": "05:30:13",
    "Action": "leave"
  },
  {
    "Id": "20",
    "Name": "Aitor Sanchez ",
    "Date": "26/08/2016",
    "Time": "05:38:17",
    "Action": "leave"
  },
  {
    "Id": "21",
    "Name": "Sisco Monjo",
    "Date": "26/08/2016",
    "Time": "05:53:22",
    "Action": "leave"
  },
  {
    "Id": "8",
    "Name": "Unai Vicario",
    "Date": "26/08/2016",
    "Time": "05:54:17",
    "Action": "leave"
  }
];
  
});