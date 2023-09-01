<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function files()
    {
       
        return $this->belongsToMany(SubjectFile::class, 'files_subjects', 'subject_id');
    }
}
