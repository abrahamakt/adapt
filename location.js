let regions = ["Accra", "Ashanti", "Central", "Upper West", "Northern", "Eastern"];
        let accra = ["McCarthy Hill", "Dome", "Tema"];
        let ashanti = ["Kumasi"];
        let central = ["Cape Coast"];
        let upperWest = ["Wa"];
        let northern = ["Tamale"];
        let eastern = ["Koforidua"];

        let region = document.getElementById("region");
        let town = document.getElementById("town");

        regions.forEach(function addRegions(item){
            let option = document.createElement("option");
            option.text = item;
            option.value = item;
            region.appendChild(option);
        })

        region.onchange = function(){
            town.innerHTML = "<option></option>";
            if(this.value == "Accra"){
                addToTown(accra);
            }
            if(this.value == "Ashanti"){
                addToTown(ashanti);
            }
            if(this.value == "Central"){
                addToTown(central);
            }
            if(this.value == "Upper West"){
                addToTown(upperWest);
            }
            if(this.value == "Northern"){
                addToTown(northern);
            }
            if(this.value == "Eastern"){
                addToTown(eastern);
            }
        }
        function addToTown(arr){
            arr.forEach(function (item) {
                let option = document.createElement("option");
                option.text = item;
                option.value = item;
                town.appendChild(option);
            })
        }