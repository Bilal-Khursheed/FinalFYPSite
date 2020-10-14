import React, { Component } from "react";
import $ from "jquery";

class FileUpload extends Component {
  render() {

    $(document).ready( function() {
        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
              if ((new Date().getTime() - start) > milliseconds){
                break;
              }
            }
          }
      $(document).on('change', '.btn-file :file', function() {
            
        var input = $(this),
        
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function(event, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function(){
            sleep(1000);
        readURL(this);
        }); 
        $('#img-stripped1').click(function(){
            sleep(1000)
            $('#img-stripped').attr('src','img/withoutskull.gif')
          })
          $('#img-segmented1').click(function(){
            sleep(1000)
            $('#img-segmented').attr('src','img/seg.gif')
          })
  });


    return (
      <div className="col-sm-12 py-3 pb-5 ">
        <div class="container col-sm-12 ">
        <div class="row py-4">
        <div class="col-lg-6 mx-auto">

            {/* <!-- Upload image input--> */}
            <div class="form-group">
        <label>Upload MRI</label>
        <div class="input-group">
            <span class="input-group-btn">
                <span class="btn btn-light btn-file">
                    Upload... <input type="file" id="imgInp"/>
                </span>
            </span>
            <input type="text" class="form-control" readonly/>
        </div>
        
    </div>

        </div></div>
          <div class="stepwizard  col-sm-12 bt-5">
            <div class="stepwizard-row setup-panel ">
              <div class="stepwizard-step">
                <a
                  href="#step-1"
                  type="button"
                  class="btn btn-light btn-circle"
                >
                  1
                </a>
                <p >Uploaded Image</p>
                
            {/* <!-- Uploaded image area--> */}
            <button className="btn btn-light" id="img-upload1 bl-1">Img with skull</button>
            <img id="img-upload" alt="" class="rounded img-responsive" width="100%" src=""/>

              </div>
              <div class="stepwizard-step">
                <a
                  href="#step-2"
                  type="button"
                  class="btn btn-light btn-circle"
                >
                  2
                </a>
                <p>Skull Stripped Img</p>
                {/* <!-- Skull Stripped image area--> */}
                <button className="btn btn-light bl-1" id="img-stripped1">SkullStripped Img</button>
            
                <img id="img-stripped" alt="" class="rounded img-responsive" src='#' width="100%"  />

              </div>
              <div class="stepwizard-step">
                <a
                  href="#step-3"
                  type="button"
                  class="btn btn-light btn-circle"
                >
                  3
                </a>
                <p>Segmented Img</p>
                {/* <!-- Segmented image area--> */}
                <button className="btn btn-light" id="img-segmented1">Segmented Img</button>
                <img id="img-segmented" alt="" class="rounded img-responsive" src=""/>

              </div>
              <div class="stepwizard-step">
                <a
                  href="#step-3"
                  type="button"
                  class="btn btn-light btn-circle"
                  
                >
                  4
                </a>
                <p>Prognosis</p>
                <div className="mt-4"> <h4>128 days</h4></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload