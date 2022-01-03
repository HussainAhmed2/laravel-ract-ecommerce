<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Course;
class Student extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $validation_rules = array(
        'name' => 'required|string|max:255',
        );

        function courses(){
            return $this->belongsToMany(Course::class);
        }

}
