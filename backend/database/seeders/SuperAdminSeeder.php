<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return User::create([
            'fname' => 'SuperAdmin',
            'mname' => 'Admin',
            'lname' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('adminpass'),
            'role' => 0
        ]);
    }
}
