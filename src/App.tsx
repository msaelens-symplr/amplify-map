import "./App.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect } from "react";
import { initializeMap } from "./mapping";
import { Flex, Heading, Menu, MenuItem } from "@aws-amplify/ui-react";

function showUsers(map: maplibregl.Map) {
    alert("Showing Users");
}

function showLoggedInUsers(map: maplibregl.Map) {
    alert("Showing Logged In Users");
}

function App() {
    let map: maplibregl.Map;
    useEffect(() => {
        async function initMap() {
            map = await initializeMap();
        }
        initMap();
    }, []);

    return (
        <>
            <Flex
                className='top-navbar'
                direction='row'
                justifyContent='flex-start'
                alignItems='stretch'
                alignContent='flex-start'
                wrap='nowrap'
                gap='1rem'>
                <Menu menuAlign='start' size='small'>
                    <MenuItem onClick={() => showUsers(map)}>Show Users</MenuItem>
                    <MenuItem onClick={() => showLoggedInUsers(map)}>Logged In Users</MenuItem>
                </Menu>
                <Heading level={4}>sLearning Clients</Heading>
            </Flex>
            <div id='map'></div>
        </>
    );
}

export default App;