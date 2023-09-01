<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use TCG\Voyager\Facades\Voyager;

class UpdateVoyagerFieldTypes extends Command
{
    protected $signature = 'voyager:update-field-types';

    protected $description = 'Update Voyager field types for many-to-many relationships';

    public function handle()
    {
        // Retrieve the BREAD for the "Level" model
    $bread = Voyager::model('DataType')->where('slug', 'Levels')->first();

// Find the field representing the belongs to relationship
$field = $bread->fields->where('column', 'stages')->first();

// Update the field attributes
$field->details = [
    'options' => [
        'multiple' => true,
    ],
];

// Save the BREAD configuration
$bread->save();
    }
}