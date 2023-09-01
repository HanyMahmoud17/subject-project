<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SubjectWithFilesResource;
use App\Models\Colleague;
use App\Models\Level;
use App\Models\Specialize;
use App\Models\Subject;
use App\Models\University;
use App\Models\Stage;
use App\Models\Count;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    public function index()
    {
         $universities = University::all();
         return response()->json([
            'data' => $universities,
         ]);

    }

    public function getStage()
    {
         $stages = Stage::all();
         return response()->json([
            'data' => $stages,
         ]);

    }

    public function getCollague(Request $request)
    {
         
        if (!$request->has('university_id') || $request->university_id == "null" && !$request->has('stage_id') || $request->stage_id == "null") {
            $colleague = Colleague::all();
        } else {
             $colleague = Colleague::where('university_id',$request->university_id)->where('stage_id',$request->stage_id)->get();
        }
            
        return response()->json([
            'data' => $colleague,
        ]);
    }

    public function getSpecializes(Request $request)
    {
        if(!$request->has('faculty_id') || $request->faculty_id == "null" ){
            $colleague = Specialize::all();
        }else{
            $colleague = Specialize::where('colleague_id',$request->faculty_id)->get();
        }
        return response()->json([
            'data' => $colleague,
         ]);
    }

    public function getLevels(Request $request)
    {
        if(!$request->has('stage_id') || $request->stage_id =="null" ){
            $levels = Level::all();
        }else{
            $levels = Level::where('stage_id',$request->stage_id)->get();
        }
        
        return response()->json([
            'data' => $levels,
         ]);
    }

    public function getSubjects(Request $request)
    {

        if(!$request->has('level_id') || $request->level_id == "null" ){
            $subjects = Subject::all();
        }else {
            $subjects = Specialize::find($request->specialize_id)->subjects()->where('level_id',$request->level_id)->get();
           
        }
        return response()->json([
            'data' => $subjects,
         ]);
    }

    public function getSubjectById(Request $request,$id)
    {
        $subject = Subject::findOrFail($id);
        $subject->increment('count');
        return new SubjectWithFilesResource($subject);
    }
    
     public function addCount(Request $request)
    {
         $subjectId = $request->input('subject_id');
            $subject = Subject::findOrFail($subjectId);
            $subject->increment('count');
            $subject->save();
    }

}
