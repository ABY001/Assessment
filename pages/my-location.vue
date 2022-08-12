<template>
    <div>
        <div class="container">
            <GmapMap :center="center" :zoom="8" id="map" map-type-id="ROADMAP" style="height: 50vh">
                <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                    :draggable="true" @click="center = m.position" />
            </GmapMap>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            markers: [],
            center: {},
            latitude: "",
            longitude: "",
            currentPosition: null
        };
    },
    mounted() {
        setTimeout(() => this.getLocation(), 1000);
    },
    methods: {
        showUserLocationOnTheMap(lat, lng) {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: new google.maps.LatLng(lat, lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            console.log("Hi");
            //Add Marker
            new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map
            });
        },

        // getAddressFrom(lat, lng) {
        //     this.$axios
        //         .get(
        //             "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        //             lat +
        //             "," +
        //             lng +
        //             "&key=" + 
        //             process.env.GOOGLE_MAP_KEY
        //         )
        //         .then(response => {
        //             if (response.data.error_message) {
        //                 console.log(response.data.error_message);
        //             } else {
        //                 console.log('response', response.data.results[0]);
        //                 // this.address = response.data.results[0].formatted_address;
        //             }
        //         });
        //     return;
        // },

        getLocation() {
            //Ask for browser location access
            if (!navigator.geolocation) {
                return;
            } else {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            // this.getAddressFrom(
                            //     position.coords.latitude,
                            //     position.coords.longitude
                            // );
                            this.showUserLocationOnTheMap(
                                position.coords.latitude,
                                position.coords.longitude
                            );
                        },
                        error => {
                            this.$notification.error({
                                message: "Error",
                                description: error.message
                            });
                        }
                    );
                } else {
                    this.$notification.error({
                        message: "Error",
                        description: "Your browser does not support geolocation API"
                    });
                }
            }
        },
    },
}
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 10px auto;
}
</style>