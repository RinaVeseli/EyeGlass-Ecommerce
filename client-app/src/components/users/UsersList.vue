<template>
    <router-view>
        <div class="flex-column">
            <!-- <div class="mr-4">
        <Sidebar />
      </div> -->
            <div class="flex-column fill-height">
                <div class="d-flex style">
                    <v-spacing>
                        <h1>Users List</h1>
                    </v-spacing>
                    <v-btn variant="outlined" color="green" class="mr-4">
                        <router-link class="text-black" to="/register" color="white">
                            Add New
                        </router-link>
                    </v-btn>
                </div>
                <v-table fixed-header height="600px" class="ml-4 flex-grow-1 table-container">
                    <thead>
                        <tr>
                            <th class="text-left">Email</th>
                            <th class="text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in userList" :key="user.uid">
                            <td>{{ user.email }}</td>
                            <td>
                                <v-btn class="mt-2" color="red accent-2" variant="flat" prepend-icon="mdi-delete"><a
                                        class="text-black" @click="deleteUser(user.uid)">
                                        Delete</a></v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
        </div>
    </router-view>
</template>


<script>

import axios from 'axios';

export default {
    name: 'UsersList',
    data() {
        return {
            userList: []
        };
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await axios.get(
                    'http://localhost:3000/api/v1/users/allusers'
                );
                console.log(response);
                this.userList = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async deleteUser(uid) {
            try {
                await axios.delete(
                    `http://localhost:3000/api/v1/users/deleteuser/${uid} `
                );
                window.location.reload();
                this.fetchUsers();
            } catch (err) {
                console.log(err);
            }
        }
    },
};
</script>

<style scoped>
.table-container {
    float: right;
    width: 55%;
    /* adjust as needed */
    margin-right: 15%;
}

.style {
    padding: 60px;
    width: 80%;
    float: right;
    justify-content: space-between;
}

.style h1 {
    font-size: 32px;
}
</style>
