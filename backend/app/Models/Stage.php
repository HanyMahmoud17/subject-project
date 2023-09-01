<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stage extends Model
{
    use HasFactory;

    /**
     * The levels that belong to the stage.
     */
    public function levels()
    {
        return $this->belongsToMany(Level::class);
    }
}
