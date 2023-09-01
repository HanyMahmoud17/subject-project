<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    use HasFactory;

    /**
     * The stages that belong to the level.
     */
    public function stages()
    {
        return $this->belongsToMany(Stage::class);
    }
}