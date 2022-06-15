<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MediaImages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class MediaImagesController extends Controller
{

    public function getMediaImages($userID){
        $data =  MediaImages::with("user")->where('user_id',$userID)->orderBy('id','DESC')->get();
        return json_encode($data);
    }

    public function uploadMediaImages (Request $request){
        $Media_Images_array           = array();
        if($request->has('media_images')){
            foreach($request->file('media_images') as $key => $data) {
                $imageName = null;
                $imageName = $request->media_images[$key]->getClientOriginalName();
                $image_old = DB::table('media_images')->where('image', $imageName)->get();
                foreach( $image_old as $imagesOLD){

                    if($imageName == $imagesOLD->image){
                        return json_encode(["message"=>"this image already exist"]);
                    }

                }
                if(count($image_old) == 0){
                    $request->media_images[$key]->move(public_path('uploads/images'), $imageName);
                    $Media_Images_array[]  =  array("user_id" => $request->user_id,  "image" => $imageName);
                }

            }
            DB::table('media_images')->insert($Media_Images_array);
            return json_encode([
                'message' => ['Media Images Added Successfully'],
                "images" => $Media_Images_array
            ], 200);
        }
    }
}
